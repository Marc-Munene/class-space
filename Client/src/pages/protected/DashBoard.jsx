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
          <div
            key={i}
            className="transform transform-fill duration-300 ease-in-out hover:scale-[1.06]"
          >
            <StatCard
              title={elem.title}
              value={elem.value}
              icon={elem.icon}
              color={elem.color}
            />
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-center text-4xl font-semibold">
        <h1 className="text-NavyBlue">Find Vacant Rooms</h1>
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

      {/* tables */}
      <div className="overflow-x-auto rounded-lg shadow-sm mt-5">
        <table className="w-full text-left text-sm sm:text-base">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 sm:p-3 text-center text-xs sm:text-sm md:text-base">
                #
              </th>
              <th className="p-2 sm:p-3 text-center text-xs sm:text-sm md:text-base">
                ROOM
              </th>
              <th className="p-2 sm:p-3 text-center text-xs sm:text-sm md:text-base">
                BUILDING
              </th>
              <th className="p-2 sm:p-3 text-center text-xs sm:text-sm md:text-base">
                CAPACITY
              </th>
              <th className="p-2 sm:p-3 text-center text-xs sm:text-sm md:text-base">
                STATUS
              </th>
              <th className="p-2 sm:p-3 text-center text-xs sm:text-sm md:text-base">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Hardcoded table details */}
            <tr className="border-b border-gray-300">
              <td className="py-2 sm:py-3 text-center">1</td>
              <td className="py-2 sm:py-3 text-center">SPA 101</td>
              <td className="py-2 sm:py-3 text-center">SPA</td>
              <td className="py-2 sm:py-3 text-center">65</td>
              <td className="py-2 sm:py-3 text-center">Vacant</td>
              <td className="py-2 sm:py-3 text-center">
                <button className="bg-red-400 hover:bg-red-500 text-black py-1 px-3 rounded-md shadow-sm text-xs sm:text-sm cursor-pointer">
                  BOOK
                </button>
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-2 sm:py-3 text-center">2</td>
              <td className="py-2 sm:py-3 text-center">CLB 001</td>
              <td className="py-2 sm:py-3 text-center">CLB</td>
              <td className="py-2 sm:py-3 text-center">70</td>
              <td className="py-2 sm:py-3 text-center">Vacant</td>
              <td className="py-2 sm:py-3 text-center">
                {" "}
                <button className="bg-red-400 hover:bg-red-500 text-black py-1 px-3 rounded-md shadow-sm text-xs sm:text-sm cursor-pointer">
                  BOOK
                </button>
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-2 sm:py-3 text-center">3</td>
              <td className="py-2 sm:py-3 text-center">NCLB 011</td>
              <td className="py-2 sm:py-3 text-center">NCLB</td>
              <td className="py-2 sm:py-3 text-center">34</td>
              <td className="py-2 sm:py-3 text-center">Vacant</td>
              <td className="py-2 sm:py-3 text-center">
                {" "}
                <button className="bg-red-400 hover:bg-red-500 text-black py-1 px-3 rounded-md shadow-sm text-xs sm:text-sm cursor-pointer">
                  BOOK
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { DashBoard };
