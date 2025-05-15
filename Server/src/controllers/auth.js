import { compare, hash } from "bcrypt";
import { User } from "../database/models/User.js";

//singUp
export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const harshedPassword = await hash(password, 10);

    const userData = {
      name,
      email,
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
  const { name, password } = req.body;

  try {
    const user = await User.findOne({ name });

    if (!user) throw new Error("Invalid credentials!");

    // if the username exists, we now try and match the passwords
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error("invalid credentials");

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
