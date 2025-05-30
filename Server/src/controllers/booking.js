import mongoose from "mongoose";
import { Booking } from "../database/models/booking.js";
import { Room } from "../database/models/room.js";
import { User } from "../database/models/User.js";

//get all boookings
export const getBooking = async (req, res) => {
  try {
    const booking = await Booking.find().populate("user room building");

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
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const { room, date, building, startTime, endTime, purpose } = req.body;
    const user = req.user;

    // Validate required fields
    if (!room || !date || !building || !startTime || !endTime || !purpose) {
      throw new Error("Missing required booking fields");
    }

    const bookingData = {
      user: user._id,
      room,
      building,
      date: new Date(date),
      startTime,
      endTime,
      purpose,
      status: "not-started",
    };

    const newBooking = await Booking.create([bookingData], { session });

    // Update room status
    const updatedRoom = await Room.findByIdAndUpdate(
      room,
      { status: "booked" },
      { new: true, session }
    );

    if (!updatedRoom) {
      throw new Error("Room not found or update failed");
    }

    await session.commitTransaction();

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: newBooking[0], // create returns an array
    });
  } catch (error) {
    await session.abortTransaction();
    // console.error("Booking error:", error.message);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to create booking",
    });
  } finally {
    session.endSession();
  }
};

//edit booking
export const editBooking = async (req, res) => {
  try {
    const bookingId = req.body._id; // moved from query to body

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
    const bookingId = req.params.id;

    // 1. Find the booking first to get the room ID
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    // // Check if the authenticated user is the one who created the booking
    if (booking.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "you can only delete your own booking",
      });
    }

    // Get the room ID from the booking
    const roomId = booking.room;

    const deletedBooking = await Booking.deleteOne({ _id: bookingId });

    // Set the associated room status to vacant and isBooked false
    await Room.findByIdAndUpdate(roomId, {
      status: "vacant",
      isBooked: false,
    });

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
