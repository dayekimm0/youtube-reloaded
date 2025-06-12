import mongoose from "mongoose";
import bycrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: String,
});

userSchema.pre("save", async function () {
  this.password = await bycrypt.hash(this.password, 5);
});

const User = mongoose.model("User", userSchema);

export default User;
