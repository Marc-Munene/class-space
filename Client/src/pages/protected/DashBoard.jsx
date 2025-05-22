import { BarChart3, Construction, DoorClosed, DoorOpen } from "lucide-react";
import { StatCard } from "../../components/StatCard";

const DashBoard = () => {
  const startCarditems = [
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

  return (
    <div>
      <div className="flex gap-6 p-6">
        {startCarditems.map((elem, i) => (
          <StatCard
            key={i}
            title={elem.title}
            value={elem.value}
            icon={elem.icon}
            color={elem.color}
          />
        ))}

        {/* <StatCard
          title="Total Classrooms"
          value={42}
          icon={BarChart3}
          color="border-blue-500"
        />
        <StatCard
          title="Vacant Rooms"
          value={16}
          icon={DoorOpen}
          color="border-teal-500"
        /> */}
      </div>
    </div>
  );
};

export { DashBoard };
