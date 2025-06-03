import express from "express";
import morgan from "morgan";

const app = express();
const port = 4000;

const morganMiddleware = morgan("combined");

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const home = (req, res) => {
  console.log("response...");
  return res.send("Home");
};

const login = (req, res) => {
  return res.send("login");
};

app.use(morganMiddleware);
app.get("/", logger, home);
app.get("/login", login);

const handleListening = () =>
  console.log(`🚀 Server Listening On Port https://localhost:${port} 🚀`);
app.listen(port, handleListening);
