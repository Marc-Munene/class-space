import { Router } from "express";
import {
  addBooking,
  deleteBooking,
  editBooking,
  getBooking,
} from "../controllers/booking.js";

const bookingRouter = Router();

bookingRouter
  .route("/bookings")
  .get(getBooking)
  .post(addBooking)
  .put(editBooking)
  .delete(deleteBooking);

export { bookingRouter };
