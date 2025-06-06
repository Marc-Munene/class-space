import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: function () {
        return this.authMethod === "local";
      },
    },
    authMethod: {
      type: String,
      enum: ["local", "google"],
      default: "local",
    },
    googleId: { type: String, unique: true, sparse: true },
    avatar: String,
    isVerified: { type: Boolean, default: false }, // optional field to track Google sign-in users
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
