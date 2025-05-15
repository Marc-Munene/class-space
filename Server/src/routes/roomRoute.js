import { Router } from "express";
import {
  addRooms,
  deleteRooms,
  editRooms,
  getRooms,
} from "../controllers/room.js";

const roomRouter = Router();

roomRouter
  .route("/rooms")
  .get(getRooms)
  .post(addRooms)
  .put(editRooms)
  .delete(deleteRooms);

export { roomRouter };
