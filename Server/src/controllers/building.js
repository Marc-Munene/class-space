import { Building } from "../database/models/building.js";

//get buildings
export const getBuildings = async (req, res) => {
  try {
    const buildings = await Building.find().populate("rooms");

    res.status(200).json({
      success: true,
      data: buildings,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "cannot get buildings",
    });
  }
};

//post buildings
export const addBuildings = async (req, res) => {
  try {
    const { buildingName } = req.body;

    const buildingData = { buildingName };

    const newBuilding = await Building.create(buildingData);

    res.status(200).json({
      success: true,
      data: newBuilding,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "cannot add buildings",
    });
  }
};

//edit buildings
export const editBuildings = async (req, res) => {
  try {
    const buildingId = req.query.id;

    const building = await Building.findOneAndUpdate(
      { _id: buildingId },
      req.body,
      { new: true }
    );
    res.status(200).json({
      success: true,
      data: building,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "cannot edit buildings",
    });
  }
};

export const deleteBuildings = async (req, res) => {
  try {
    const buildingId = req.query.id;

    const deletedBuilding = await Building.deleteOne({ _id: buildingId });

    res.status(200).json({
      success: true,
      message: "building deleted successfully",
      deletedCount: deletedBuilding.deletedCount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "cannot delete buildings",
    });
  }
};
