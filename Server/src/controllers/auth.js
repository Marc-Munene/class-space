import { hash } from "bcrypt";
import { User } from "../database/models/User";

//singUp
const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const harshedPassword = await hash(password, 10);

    req.body.password = harshedPassword;

    const newUser = await User.create(req.body);

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
