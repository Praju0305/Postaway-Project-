import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";

class UserController {
  signUp(req, res) {
    const { name, email, password } = req.body;
    const user = UserModel.signUp(name, email, password);
    res.status(201).send({ message: "User Sucessfully Created", user });
  }

  signIn(req, res) {
    const { email, password } = req.body;
    const result = UserModel.signIn(email, password);
    if (!result) {
      return res.status(400).send("Invalid Credentials");
    } else {
      const token = jwt.sign(
        { userID: result.id, email: result.email },
        "feeed64358b6bba702845280445a372ae3f23de25daee825838ab9735b4a4024",
        { expiresIn: "1h" }
      );
      return res.status(200).send(token);
    }
  }
}


export default UserController;