import { Router } from "express";
import {
  addUsers,
  deleteUsers,
  editUsers,
  getUsers,
} from "../controllers/users.js";

const userRouter = Router();

userRouter
  .route("/users")
  .get(getUsers)
  .post(addUsers)
  .put(editUsers)
  .delete(deleteUsers);

export { userRouter };
