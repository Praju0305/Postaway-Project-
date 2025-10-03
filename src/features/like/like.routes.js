import express from 'express';
import LikeController from './like.controller.js';

const likeRouter = express.Router();

const likeController = new LikeController();

likeRouter.get("/:postId",likeController.getLike) //Retrive all likes for a specific post
likeRouter.get("/toggle/:postId",likeController.toggleLike) //Toggle like status for a specific post

export default likeRouter;