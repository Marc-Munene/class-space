import { Schema, model } from "mongoose";

const bookingSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user" },
    room: { type: Schema.Types.ObjectId, ref: "room" },
    date: { type: Date, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
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
