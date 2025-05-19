import { Router } from "express";
import {
  addBuildings,
  deleteBuildings,
  editBuildings,
  getBuildings,
} from "../controllers/building.js";

const buildingRouter = Router();

buildingRouter
  .route("/buildings")
  .get(getBuildings)
  .post(addBuildings)
  .put(editBuildings)
  .delete(deleteBuildings);

export { buildingRouter };
