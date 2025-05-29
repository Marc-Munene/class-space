import { compare, hash } from "bcrypt";
import { User } from "../database/models/User.js";
import jwt from "jsonwebtoken";

//singUp
export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const harshedPassword = await hash(password, 10);

    const trimmedName = name.trim();

    const trimmedEmail = email.trim().toLowerCase();

    const userData = {
      name: trimmedName,
      email: trimmedEmail,
      password: harshedPassword,
    };

    // req.body.password = harshedPassword;

    const newUser = await User.create(userData);

    res.status(201).json({
      success: true,
      message: "Signup successfull",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to sign Up!",
    });
  }
};

//LogIn
export const login = async (req, res) => {
  const { email, password } = req.body;

  const trimmedEmail = email.trim().toLowerCase();

  try {
    const user = await User.findOne({ email: trimmedEmail });

    if (!user) throw new Error("Invalid credentials!");

    // if the username exists, we now try and match the passwords
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error("invalid credentials");

    //the password is correct, now we generate the JWT token for the user

    const { _id } = user;
    const jwtinfo = {
      _id,
    };

    //sign the jwt using the secret key
    const token = jwt.sign(jwtinfo, process.env.JWT_SECRET, {
      expiresIn: 24 * 60 * 60,
    });

    //add token to the cookie
    res.cookie(process.env.AUTH_COOKIE_NAME, token, {
      maxAge: 24 * 60 * 1000,

      //can only be accessed by server requestes

      httpOnly: true,

      //path where the cookie is valid
      path: "/",

      // domain = what domain the cookie is valid on
      // domain: "localhost",
      // secure = only send cookie over https

      secure: process.env.NODE_ENV === "production",

      // sameSite = only send cookie if the request is coming from the same origin
      sameSite: "lax", // "strict" | "lax" | "none" (secure must be true)
      // maxAge = how long the cookie is valid for in milliseconds
    });

   
    return res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to login!",
    });
  }
};

export const currentUser = (req, res) => {
  res.json({
    success: true,
    data: req.user,
  });
};

export const logout = (req, res) => {
  res.clearCookie(process.env.AUTH_COOKIE_NAME).json({
    success: true,
  });
};
