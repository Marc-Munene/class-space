import { Router } from "express";
import {
  addNotification,
  deleteNotification,
  editNotification,
  getNotification,
} from "../controllers/notification.js";

const notificationRouter = Router();

notificationRouter
  .route("/notifications")
  .get(getNotification)
  .post(addNotification)
  .put(editNotification)
  .delete(deleteNotification);

export { notificationRouter };
