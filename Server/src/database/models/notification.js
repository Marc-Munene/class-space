import { Schema, model } from "mongoose";

const notificationSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user" },
  relatedBooking: { type: Schema.Types.ObjectId, ref: "booking" },
  type: {
    type: String,
    enum: ["reminder", "conflict", "system"],
    default: "system",
  },
  message: { type: String, required: true },
  isRead: { type: Boolean, default: false },
  triggerTime: { type: Date },
});
