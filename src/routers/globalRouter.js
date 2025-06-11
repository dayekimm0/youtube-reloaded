import express from "express";
import { home, search } from "../controllers/videoController";
import { join, login } from "../controllers/userController";

const globalRouter = express.Router();

// const handdleHome = (req, res) => {
//   return res.send("Home");
// };

// const handleJoin = (req, res) => {
//   return res.send("Join");
// };

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
