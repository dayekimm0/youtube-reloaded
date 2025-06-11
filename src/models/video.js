import mongoose from "mongoose";

export const formatHashtags = (hashtags) => {
  hashtags.split(",").map((word) => (word.startsWith("#") ? word : `#${word}`));
};

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    uppercase: true,
    trim: true,
    maxLength: 80,
    required: true,
  },
  description: { type: String, required: true, minLength: 20, trim: true },
  createdAt: { type: Date, default: Date.now, required: true },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

videoSchema.pre("save", async function () {
  console.log("We are about to:", this);
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
