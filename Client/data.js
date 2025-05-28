import { BarChart3, Construction, DoorClosed, DoorOpen } from "lucide-react";

export const startCarditems = [
  {
    title: "Total Rooms",
    value: 42,
    icon: BarChart3,
    color: "border-blue-500",
  },
  { 
    title: "Vacant Rooms",
    value: 12,
    icon: DoorOpen,
    color: "border-teal-500",
  },
  {
    title: "Booked Rooms",
    value: 15,
    icon: DoorClosed,
    color: "border-blue-500",
  },
  {
    title: "Under-Maintance",
    value: 0,
    icon: Construction,
    color: "border-red-500",
  },
];
