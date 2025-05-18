import { Router } from "express";
import {
  deleteUsers,
  editUsers,
  getOneUser,
  getUsers,
} from "../controllers/users.js";

const userRouter = Router();

userRouter
  .route("/users")
  .get(getUsers)
  // .post(addUsers) this route is used to add a doctor to the database
  .put(editUsers)
  .delete(deleteUsers);

// This route is used to get a single doctor by ID
userRouter.route("/user/single/:id").get(getOneUser);

export { userRouter };
