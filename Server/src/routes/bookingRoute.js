import { Router } from "express";
import {
  addBooking,
  deleteBooking,
  editBooking,
  getBooking,
} from "../controllers/booking.js";
import { userAuthentication } from "../middleware/AuthMiddleware.js";

const bookingRouter = Router();

bookingRouter
  .route("/bookings")
  .get(getBooking)
  .post(addBooking)
  .put(editBooking);

// DELETE specific booking with authentication
// .delete(deleteBooking);
bookingRouter.delete("/bookings/:id", userAuthentication, deleteBooking);

export { bookingRouter };
