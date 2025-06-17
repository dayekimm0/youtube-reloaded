import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  deleteVideo,
  getUpload,
  postUpload,
} from "../controllers/videoController";
import { protectedMiddleware, videoUpload } from "../middlewares";

const videoRouter = express.Router();

videoRouter
  .route("/upload")
  .all(protectedMiddleware)
  .get(getUpload)
  .post(videoUpload.single("video"), postUpload);
videoRouter.route("/:id").get(watch);
videoRouter
  .route("/:id/edit")
  .all(protectedMiddleware)
  .get(getEdit)
  .post(postEdit);
videoRouter.get("/:id/delete", protectedMiddleware, deleteVideo);

export default videoRouter;
