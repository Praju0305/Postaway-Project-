import PostController from "./post.controller.js";
import express from "express";
import {upload} from "../../middleware/fileupload.middleware.js"

const postRouter = express.Router();
const postController = new PostController();

postRouter.get("/all",postController.getAllpost);
postRouter.get("/:id",postController.getPostbyId);
postRouter.get("/",postController.getPostbyUser);
postRouter.post("/",upload.single(imageUrl),postController.addPost);
postRouter.delete("/",postController.deletePost);
postRouter.put("/",postController.updatePost);

export default postRouter;