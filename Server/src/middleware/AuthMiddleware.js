import jwt from "jsonwebtoken";
import { User } from "../database/models/User.js";

export const userAuthentication = async (req, res, next) => {
  try {
    const token = req.cookies[process.env.AUTH_COOKIE_NAME];
    // console.log("req.cookies", req.cookies);

    // console.log("token", token);

    if (!token) throw new Error("token not found!");

    // beyond this point means the token has been set in the cookie

    // step one: verify the token

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const { _id } = payload;

    const user = await User.findById(_id);

    // console.log("user:", user);

    if (!user) throw new Error("Invalid Token!");

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: "Not authorized",
    });
  }
};
