import { Booking } from "../database/models/booking.js";

//get all boookings
export const getBooking = async (req, res) => {
  try {
    const booking = await Booking.find().populate("user room");

    res.status(200).json({
      success: true,
      message: "Booking got successfully",
      data: booking,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "cannot get bookings",
    });
  }
};

//add booking
export const addBooking = async (req, res) => {
  try {
    const { user, room, date, startTime, endTime, purpose, status } = req.body;

    const bookingData = {
      user,
      room,
      date,
      startTime,
      endTime,
      purpose,
      status,
    };

    const newBooking = await Booking.create(bookingData);

    res.status(200).json({
      success: true,
      message: "Booking got successfully",
      data: newBooking,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "cannot add bookings",
    });
  }
};

//edit booking
export const editBooking = async (req, res) => {
  try {
    const bookingId = req.query.Id;

    const booking = await Booking.findOneAndUpdate(
      { _id: bookingId },
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: booking,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "cannot edit bookings",
    });
  }
};

//delete Booking
export const deleteBooking = async (req, res) => {
  try {
    const bookingId = req.query.Id;

    const deletedBooking = await Booking.deleteOne({ _id: bookingId });

    res.status(200).json({
      success: true,
      message: "deleted successfully",
      deletedCount: deletedBooking.deletedCount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "cannot delete bookings",
    });
  }
};
