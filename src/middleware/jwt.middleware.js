import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const payload = jwt.verify(
      token,
      "feeed64358b6bba702845280445a372ae3f23de25daee825838ab9735b4a4024"
    );
    req.userID = payload.userID;
    console.log(payload);
  } catch (error) {
    console.log(error);
    return res.status(401).send("Unauthorized");
  }

  next();
};

export default jwtAuth;
