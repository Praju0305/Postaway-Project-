import express from 'express';
import CommentController from './comment.controller.js';

const commentRouter = express.Router();
const commentController = new CommentController();

commentRouter.get("/:id",commentController.GetComment) //Retrive all comments for a specific post
commentRouter.post("/:id",commentController.AddComment) //add a new comment to a specific post
commentRouter.delete("/:id",commentController.DeleteComment) //Delete a specific comment by ID
commentRouter.put("/:id",commentController.UpdateComment) //Update a specific comment by ID

export default commentRouter;