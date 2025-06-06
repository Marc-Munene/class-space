import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["rep", "student", "admin", "user"],
      default: "user",
    },
    isGoogleUser: { type: Boolean, default: false }, // optional field to track Google sign-in users
  },
  {
    timestamps: true,
  }
);

const User = new model("user", userSchema);

export { User };
