import { useState } from "react";

const BookingDetailsForm = ({ booking }) => {
  const [date, setDate] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <p className="p-2 border rounded-md bg-gray-100">
            {new Date(booking.date).toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Start Time
          </label>
          <p className="p-2 border rounded-md bg-gray-100">
            {booking.startTime}
          </p>
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            End Time
          </label>
          <p className="p-2 border rounded-md bg-gray-100">{booking.endTime}</p>
        </div>

        <div className="space-y-1 sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Purpose
          </label>
          <p className="p-2 border rounded-md bg-gray-100">{booking.purpose}</p>
        </div>

        <div className="space-y-1 sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Booked By
          </label>
          <p className="p-2 border rounded-md bg-gray-100">
            {booking.user?.name || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export { BookingDetailsForm };
