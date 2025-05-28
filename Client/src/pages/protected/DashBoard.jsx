import { StatCard } from "../../components/StatCard";
import { startCarditems } from "../../../data";
import { useState } from "react";
import { Funnel } from "lucide-react";

const DashBoard = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className="flex gap-6 p-6 ">
        {startCarditems.map((elem, i) => (
          <div className="transform transform-fill duration-300 ease-in-out hover:scale-[1.06]">
            <StatCard
              key={i}
              title={elem.title}
              value={elem.value}
              icon={elem.icon}
              color={elem.color}
            />
          </div>
        ))}
      </div>

      {/* search bar */}
      <div className="flex items-center justify-center mt-5 gap-3 ">
        <input
          type="text"
          placeholder="Search Items"
          className=" border border-gray-300 rounded-md w-[35%] p-2 text-sm"
          autoFocus
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="flex items-center cursor-pointer">
          <Funnel size={20} />
        </span>
      </div>
    </div>
  );
};

export { DashBoard };
