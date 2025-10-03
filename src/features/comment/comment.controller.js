import CommentModel from "./comment.model.js";

export default class CommentController{
    GetComment(req,res){
        const postid = req.params.id;
        const comment = CommentModel.getCommentById(postid);
        if(!comment){
            res.status(400).send("comment not found");
        }else{
            res.status(200).send(comment);
        }
    }
    
    AddComment(req,res){
        const userid = req.userID;
        const postid = req.params.id;
        const {content} = req.body;
        const newcomment = CommentModel.addComment(userid,postid,content);
        res.status(200).send(newcomment);
    }

    DeleteComment(req,res){
        const commentid = req.params.id;
        const error = CommentModel.deleteComment(commentid);
        if(error){
            console.log(error);
            res.status(400).send(error);
        }else{
            console.log("Comment Sucessfully Deleted");
            res.status(200).send("Comment Sucessfully Deleted");
        }
    }

    UpdateComment(req,res){
        const commentid = req.params.id;
        const userid = req.userID;
        const {postid} = req.body;
        const {content} = req.body;
        const error = CommentModel.updateComment(commentid,userid,postid,content)
        if(error){
            console.log(error);
            res.status(400).send(error);
        }else{
            console.log("Comment Sucessfully updated");
            res.status(200).send("Comment Sucessfully updated");
        }

    }
}