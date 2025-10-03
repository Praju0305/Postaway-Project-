export default class PostModel {
  constructor(id, userID, caption, imageUrl) {
    this.id = id;
    this.userID = userID;
    this.caption = caption;
    this.imageUrl = imageUrl;
  }

  static getAllPost() {
    return posts;
  }

  static add(userID, caption, imageUrl) {
    const newPost = new PostModel(posts.length + 1, userID, caption, imageUrl);
    posts.push(newPost);
    return newPost;
  }

  static postbyId(id) {
    const post = posts.find((p) => p.id == id);
    return post;
  }

  static postbyUser(userID) {
    const post = posts.filter((u) => u.userID == userID);
    return post;
  }

  static delete(id) {
    const index = posts.findIndex((i) => i.id == id);
    if (index == -1) {
      return "Item not found";
    } else {
        posts.splice(index,1);
    }
  }

  static update(id,caption,imageUrl) {
    const index = posts.findIndex((i) => i.id == id);
    if(index != -1) {
        posts[index].userID = id;
        posts[index].caption = caption;
        posts[index].imageUrl = imageUrl;
    }else{
        return "Not Found";
    }
  }
  
}

let posts = [
  new PostModel(
    1,
    "1",
    "This is my first post user 1",
    "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/5165He67NEL._SY445_SX342_.jpg"
  ),
  new PostModel(
    2,
    "2",
    "This is my Second post user 2",
    "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/5165He67NEL._SY445_SX342_.jpg"
  ),
  new PostModel(
    3,
    "1",
    "This is my Third post user 1",
    "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/5165He67NEL._SY445_SX342_.jpg"
  ),
];
