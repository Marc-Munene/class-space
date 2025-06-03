import { StatCard } from "../../components/StatCard";
// import { startCarditems } from "../../../data";
import { useEffect, useMemo, useState } from "react";
import { Funnel } from "lucide-react";
import { Modal } from "../../components/Modal";
import { BookingForm } from "../../Forms/BookingForm";
import { useRoomStore } from "../../store/RoomStore";
import debounce from "debounce";
import { BarChart3, Construction, DoorClosed, DoorOpen } from "lucide-react";
import { getRoomStats } from "../../../data";

const DashBoard = () => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("");

  const { roomData, rooms } = useRoomStore();

  useEffect(() => {
    roomData();
  }, [roomData]);

  // Initialize filteredRooms with all rooms
  useEffect(() => {
    setFilteredRooms(rooms);
  }, [rooms]);

  const cardItems = getRoomStats(rooms);

  const debouncedSearch = useMemo(
    () =>
      debounce((term) => {
        const filtered = rooms.filter((room) =>
          room.roomName.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredRooms(filtered);
      }, 500),
    [rooms]
  );

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchItem(term);
    debouncedSearch(term);
  };

  const BookRoomClick = (element) => {
    setSelectedRoom(element);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <div className="mt-5 flex justify-center">
        <h1 className="text-NavyBlue text-4xl font-semibold">
          Find Vacant Rooms
        </h1>
      </div>

      {/* Stat Cards */}
      <div className="flex flex-wrap justify-center mt-5 gap-6 p-6">
        {cardItems.map((elem, i) => (
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

      {/* search bar */}
      <div className="flex items-center justify-center mt-5 gap-3 min-h-[60px]">
        <input
          type="text"
          placeholder="Search Items"
          className=" border border-gray-300 rounded-md w-[35%] p-2 text-sm"
          autoFocus
          value={searchItem}
          onChange={handleSearchChange}
        />
        <span className="flex items-center cursor-pointer">
          <Funnel size={20} />
        </span>
      </div>

      {/* tables */}
      <div className="mt-5">
        <div className="overflow-x-auto rounded-lg shadow-sm ">
          <table className="w-full text-left text-base ">
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
              {filteredRooms
                .filter((room) => room.status === "vacant")
                .map((element, index) => (
                  <tr className="border-b border-gray-300" key={index}>
                    <td className="py-2 sm:py-3 text-center">{index + 1}</td>
                    <td className="py-2 sm:py-3 text-center">
                      {element.roomName}
                    </td>
                    <td className="py-2 sm:py-3 text-center">
                      {element.building.buildingName}
                    </td>
                    <td className="py-2 sm:py-3 text-center">
                      {element.capacity}
                    </td>
                    <td className="py-2 sm:py-3 text-center">
                      {element.status}
                    </td>
                    <td className="py-2 sm:py-3 text-center">
                      <button
                        className="bg-red-400 hover:bg-red-500 text-black py-1 px-3 rounded-md shadow-sm text-xs sm:text-sm cursor-pointer"
                        onClick={() => BookRoomClick(element)}
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

      <Modal
        openModal={modal}
        closeModal={() => setModal(false)}
        title={`Book ${selectedRoom?.roomName}`}
      >
        <BookingForm room={selectedRoom} closeModal={() => setModal(false)} />
      </Modal>
    </>
  );
};

export { DashBoard };
