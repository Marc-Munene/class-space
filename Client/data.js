// utils/roomStats.js
import { BarChart3, Construction, DoorClosed, DoorOpen } from "lucide-react";

export const getRoomStats = (rooms) => {
  const totalRooms = rooms.length;
  const vacantRooms = rooms.filter((room) => room.status === "vacant").length;
  const bookedRooms = rooms.filter((room) => room.status === "booked").length;
  const underMaintenance = rooms.filter(
    (room) => room.status === "under-maintenance"
  ).length;

  return [
    {
      title: "Total Rooms",
      value: totalRooms,
      icon: BarChart3,
      color: "border-blue-500",
    },
    {
      title: "Vacant Rooms",
      value: vacantRooms,
      icon: DoorOpen,
      color: "border-teal-500",
    },
    {
      title: "Booked Rooms",
      value: bookedRooms,
      icon: DoorClosed,
      color: "border-blue-500",
    },
    {
      title: "Under-Maintenance",
      value: underMaintenance,
      icon: Construction,
      color: "border-red-500",
    },
  ];
};
