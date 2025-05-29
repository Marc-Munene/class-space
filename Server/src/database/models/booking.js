import { Schema, model } from "mongoose";

const bookingSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user" },
    room: { type: Schema.Types.ObjectId, ref: "room" },
    building: { type: Schema.Types.ObjectId, ref: "building" },
    date: { type: Date, required: true },
    startTime: {
      type: String,
      required: true,
      match: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, // Ensures "09:00" or "23:59" format
    },
    endTime: {
      type: String,
      required: true,
      match: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
    },
    purpose: { type: String, required: true },
    status: {
      type: String,
      enum: ["in-progress", "not-started", "completed"],
      default: "not-started",
    },
  },
  {
    timestamps: true,
  }
);

const Booking = new model("booking", bookingSchema);

export { Booking };
