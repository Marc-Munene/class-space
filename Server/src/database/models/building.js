import { Schema, model } from "mongoose";

const buildingSchema = new Schema(
  {
    buildingName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Building = new model("building", buildingSchema);

export { Building };
