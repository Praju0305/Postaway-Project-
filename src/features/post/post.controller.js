import PostModel from "./post.model.js";

export default class PostController {
  getAllpost(req, res) {
    const posts = PostModel.getAllPost();
    res.status(200).send(posts);
  }

  getPostbyId(req, res) {
    const id = req.params.id;
    const posts = PostModel.postbyId(id);
    if (!posts) {
      res.status(400).send("No Posts Found.");
    } else {
      res.status(200).send(posts);
    }
  }

  getPostbyUser(req, res) {
    const userID = req.userID;
    const posts = PostModel.postbyUser(userID);
    if (!posts) {
      res.status(400).send("No Posts Found.");
    } else {
      res.status(200).send(posts);
    }
  }

  addPost(req, res) {
    const userID = req.userID;
    const { caption } = req.body;
    const imageUrl = req.file.filename;
    const newPost = PostModel.addPost(userID, caption, imageUrl);
    res.status(200).send(newPost);
  }

  deletePost(req, res) {
    const id = req.params.id;
    const remove = PostModel.delete(id);
    if (remove) {
      console.log(remove);
      return res.status(400).send(remove);
    } else {
      console.log("Item Deleted Sucessfully.!!");
      res.status(200).send("Item Deleted Sucessfully");
    }
  }

  updatePost(req, res) {
    const id = req.params.id;
    const { caption } = req.body;
    const imageUrl = req.file.filename;
    const update = PostModel.update(id, caption, imageUrl);
    if (updatePost) {
      console.log(updatePost);
      return res.status(400).send(updatePost);
    } else {
      console.log("Iteam Sucessfully update");
      return res.status(200).send("Iteam Sucessfully update");
    }
  }
}
