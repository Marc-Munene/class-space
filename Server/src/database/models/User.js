import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["rep", "student", "admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const User = new model("user", userSchema);

export { User };
