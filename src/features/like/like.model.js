export default class LikeModel{
    constructor(id,userId,postId){
        this.id = id;
        this.userId = userId;
        this.postId = postId;
    }
    static getAll(postid){
        return likes.filter((i)=>i.postId == postid)
    }
    static toggle(postid,userId){
        const Index = likes.findIndex((i)=>i.postId == postid)
        if(Index != -1){
            likes.splice(Index,1);
        }else{
            const newLike = new LikeModel(
                likes.length+1,
                userId,
                postid,
            )
            likes.push(newLike);
            return newLike
        }
    }

}

var likes = [
    new LikeModel(1,'1','1'),
    new LikeModel(2,'2','2'),
    new LikeModel(3,'1','3'),
    new LikeModel(4,'2','1')
]