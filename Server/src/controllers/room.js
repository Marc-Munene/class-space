import { Room } from "../database/models/room.js";

//get Rooms
export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find().populate("building");

    res.status(200).json({
      success: true,
      message: "room got successfully",
      data: rooms,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Cannot get rooms",
    });
  }
};

//Add rooms
export const addRooms = async (req, res) => {
  try {
    const { roomName, building, capacity, status, isBooked } = req.body;

    const trimmedRoomName = roomName.trim().toLowerCase();

    const roomData = {
      roomName: trimmedRoomName,
      building,
      capacity,
      status,
      isBooked,
    };

    const newRoom = await Room.create(roomData);

    res.status(200).json({
      success: true,
      message: "room added successfully",
      data: newRoom,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Cannot add rooms",
    });
  }
};

//Edit rooms
export const editRooms = async (req, res) => {
  try {
    const roomId = req.query.id;

    const room = await Room.findOneAndUpdate({ _id: roomId }, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "room edited successfully",
      data: room,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Cannot add rooms",
    });
  }
};

// delete rooms
export const deleteRooms = async (req, res) => {
  try {
    const roomId = req.query.id;

    const deletedRoom = await Room.deleteOne({ _id: roomId });

    res.status(200).json({
      success: true,
      message: "room deleted successfully",
      deletedCount: deletedRoom.deletedCount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Cannot add rooms",
    });
  }
};
