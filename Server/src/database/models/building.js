import { Schema, model } from "mongoose";

const buildingSchema = new Schema(
  {
    buildingName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

buildingSchema.virtual("rooms", {
  ref: "room",
  localField: "_id",
  foreignField: "building",
});

buildingSchema.set("toJSON", { virtuals: true });
buildingSchema.set("toObject", { virtuals: true });

const Building = new model("building", buildingSchema);

export { Building };
