import { Schema, model } from "mongoose";

const roomSchema = new Schema({
  roomName: { type: String, required: true },
  building: { type: Schema.Types.ObjectId, ref: "building" },
  capacity: { type: Number, required: true },
  status: {
    type: String,
    enum: ["booked, in-progress, vacant"],
    default: "vacant",
  },
  isBooked: { type: Boolean, default: "false" },
});

const Room = new model("room", roomSchema);

export { Room };
