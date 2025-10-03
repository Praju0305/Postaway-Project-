import express from "express";
import userRouter from "./src/features/user/user.routes.js";
import postRouter from "./src/features/post/post.routes.js";
import loggerMiddleware from "./src/middleware/logger.middleware.js";
import jwtAuth from "./src/middleware/jwt.middleware.js";
import bodyParser from "body-parser";
import commentRouter from "./src/features/comment/comment.routes.js";
import likeRouter from "./src/features/like/like.routes.js";
import { ApplicationError } from "./src/middleware/error-handling-middleware.js";

const app = express();

app.use(bodyParser.json());

app.use("/api/users", userRouter);
app.use("/api/posts", jwtAuth, loggerMiddleware, postRouter);
app.use("/api/comments", jwtAuth, loggerMiddleware, commentRouter);
app.use("/api/likes", jwtAuth, loggerMiddleware, likeRouter);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Postaway Application");
});

//Error handler middleware
app.use((err, req, res, next) => {
  console.log(err);
  if (err instanceof ApplicationError) {
    res.status(err.code).send(err.message);
  }
  //serverError
  res.status(500).send("Something went wrong, please try again later");
});

//middleware to handle 404 request.
server.use((req, res) => {
  res.status(404).send("API NOT FOUND.");
});

app.listen(3000, () => {
  console.log("Server listen at 3000");
});
