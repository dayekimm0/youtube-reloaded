import express from "express";
import {
  edit,
  remove,
  logout,
  see,
  startGithubLogin,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/:id", see);
userRouter.get("/:id/edit", edit);
userRouter.get("/:id/delete", remove);

export default userRouter;
