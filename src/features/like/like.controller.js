import LikeModel from "./like.model.js";

export default class LikeController{
    getLike(req,res,next){
        const postid = req.params.postId;
        const like = LikeModel.getAll(postid);
        if(like.length == 0){
            res.status(400).send("Likes not found");
        }else{
            res.status(200).send(like)
        }
    }
    toggleLike(req,res,next){
        const postid = req.params.postId;
        const userId = req.userID;
        const togglelike = LikeModel.toggle(postid,userId);
        if(togglelike){
            res.status(200).send("new Like Added");
        }else{
            res.status(200).send("Like Deleted");
        }

    }
}