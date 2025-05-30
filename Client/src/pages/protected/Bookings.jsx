import { useEffect, useState } from "react";
import { useBookingStore } from "../../store/Bookings";
import { Modal } from "../../components/Modal";
import { BookingDetailsForm } from "../../Forms/BookingDetailsForm";

const Bookings = () => {
  const { bookingData, bookings } = useBookingStore();

  const [modal, setModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    bookingData();
  }, []);

  const handleClick = (booking) => {
    setSelectedBooking(booking);
    setModal(true);
  };

  return (
    <>
      <div className="mt-5 flex justify-center text-4xl font-semibold">
        <h1 className="text-NavyBlue">Bookings</h1>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-sm mt-5">
        <table className="w-full text-left text-base">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 sm:p-3 text-center">#</th>
              <th className="p-2 sm:p-3 text-center">ROOM</th>
              <th className="p-2 sm:p-3 text-center">BUILDING</th>
              <th className="p-2 sm:p-3 text-center">DATE</th>
              <th className="p-2 sm:p-3 text-center">Details</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((element, i) => (
              <tr className="border-b border-gray-300" key={i}>
                <td className="py-2 sm:py-3 text-center">{i + 1}</td>
                <td className="py-2 sm:py-3 text-center">
                  {element.room.roomName}
                </td>
                <td className="py-2 sm:py-3 text-center">
                  {element.building.buildingName}
                </td>
                <td className="py-2 sm:py-3 text-center">
                  {new Date(element.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </td>
                <td
                  className="py-2 sm:py-3 text-DeepBlue text-center"
                  onClick={() => handleClick(element)}
                >
                  View
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal openModal={modal} closeModal={() => setModal(false)}>
        <BookingDetailsForm booking={selectedBooking} />
      </Modal>
    </>
  );
};

export { Bookings };
