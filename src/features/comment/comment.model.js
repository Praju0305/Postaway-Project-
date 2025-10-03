export default class CommentModel{
    constructor(id,userId,postId,content){
        this.id = id;
        this.userId = userId;
        this.postId = postId;
        this.content = content;
    }
    static getCommentById(postid){
        const comment = comments.find((i)=>i.id==postid)
        return comment;
    }
    static addComment(userid,postid,content){
        const newcomment = new CommentModel(
            comments.length+1,
            userid,
            postid,
            content
        )
        comments.push(newcomment);
        return newcomment;
    }
    static deleteComment(commentId){
        const index = comments.findIndex((i)=>i.id == commentId);
        if(index == -1){
            return 'Comment not found';
        }else{
            comments.splice(index,1);
        }
    }
    static updateComment(commentId,userid,postid,content){
        const index = comments.findIndex((i)=>i.id == commentId);
        if(index != -1){
            comments[index].userId = userid;
            comments[index].postId = postid;
            comments[index].content = content;
        }else{
            return 'Comment not found';
        }
    }
}

var comments = [
    new CommentModel(1,'1','1','nice'),
    new CommentModel(2,'1','2','cool'),
    new CommentModel(3,'2','3','beautyful'),
    new CommentModel(4,'2','1','zabardast'),
]