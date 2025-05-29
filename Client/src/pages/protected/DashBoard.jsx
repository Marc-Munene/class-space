import { StatCard } from "../../components/StatCard";
import { startCarditems } from "../../../data";
import { useEffect, useState } from "react";
import { Funnel } from "lucide-react";
import { Modal } from "../../components/Modal";
import { BookingForm } from "../../Forms/BookingForm";
import { useRoomStore } from "../../store/RoomStore";

const DashBoard = () => {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);

  const { roomData, rooms } = useRoomStore();

  useEffect(() => {
    roomData();
  }, []);

  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      {/* Stat Cards */}
      <div className="flex flex-wrap justify-center gap-6 p-6">
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

      <div className="mt-5 flex justify-center">
        <h1 className="text-NavyBlue text-4xl font-semibold">
          Find Vacant Rooms
        </h1>
      </div>

      {/* search bar */}
      <div className="flex items-center justify-center mt-5 gap-3 min-h-[60px]">
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
      <div className="mt-5">
        <div className="overflow-x-auto rounded-lg shadow-sm ">
          <table className="w-full text-left text-sm ">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-3 text-center">#</th>
                <th className="px-4 py-3 text-center">ROOM</th>
                <th className="px-4 py-3 text-center">BUILDING</th>
                <th className="px-4 py-3 text-center">CAPACITY</th>
                <th className="px-4 py-3 text-center">STATUS</th>
                <th className="px-4 py-3 text-center">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((element, i) => (
                <tr className="border-b border-gray-300" key={i}>
                  <td className="py-2 sm:py-3 text-center">{i + 1}</td>
                  <td className="py-2 sm:py-3 text-center">
                    {element.roomName}{" "}
                  </td>
                  <td className="py-2 sm:py-3 text-center">
                    {element.building.buildingName}
                  </td>
                  <td className="py-2 sm:py-3 text-center">
                    {element.capacity}
                  </td>
                  <td className="py-2 sm:py-3 text-center">
                    {element.status}{" "}
                  </td>
                  <td className="py-2 sm:py-3 text-center">
                    <button
                      className="bg-red-400 hover:bg-red-500 text-black py-1 px-3 rounded-md shadow-sm text-xs sm:text-sm cursor-pointer"
                      onClick={() => setModal(true)}
                    >
                      BOOK
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal openModal={modal} closeModal={closeModal}>
        <BookingForm />
      </Modal>
    </>
  );
};

export { DashBoard };
