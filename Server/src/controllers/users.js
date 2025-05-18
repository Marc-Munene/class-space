import { User } from "../database/models/User.js";

//get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Cannot get users",
    });
  }
};

//get one user
export const getOneUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId);

    res.status(200).json({
      success: true,
      message: "User found!",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "user not found",
    });
  }
};

//post function is used for authentication

//edit user details
export const editUsers = async (req, res) => {
  try {
    const userId = req.query.id;

    const user = await User.findOneAndUpdate({ _id: userId }, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "user edited successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Cannot edit user details",
    });
  }
};

//delete users
export const deleteUsers = async (req, res) => {
  try {
    const userId = req.query.id;

    const deletedUser = await User.deleteOne({ _id: userId });

    res.status(200).json({
      success: true,
      message: "user deleted successfully",
      deletedCount: deletedUser.deletedCount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Cannot delete user ",
    });
  }
};
