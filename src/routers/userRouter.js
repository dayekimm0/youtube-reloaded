import express from "express";
import { edit, remove } from "../controllers/userController";
import { logout, see } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/:id", see);
userRouter.get("/delete", remove);
userRouter.get("/edit", edit);

export default userRouter;
