import { useState } from "react";

const BookingForm = ({ closeModal }) => {
  const [date, setDate] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleSubmit = () => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2"> */}
      <div className="space-y-2">
        <label htmlFor="date" className="block text-sm font-medium">
          Date
        </label>
        <input
          type="date"
          id="date"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="timeStart" className="block text-sm font-medium">
          Start Time
        </label>
        <input
          type="time"
          id="timeStart"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          value={timeStart}
          onChange={(e) => setTimeStart(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="timeEnd" className="block text-sm font-medium">
          End Time
        </label>
        <input
          type="time"
          id="timeEnd"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          value={timeEnd}
          onChange={(e) => setTimeEnd(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2 sm:col-span-2">
        <label htmlFor="purpose" className="block text-sm font-medium">
          Purpose
        </label>
        <input
          id="purpose"
          rows={3}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          placeholder="Class, CAT , Discussion"
          required
        />
      </div>
      {/* </div> */}

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 cursor-pointer"
        >
          Book Room
        </button>
      </div>
    </form>
  );
};

export { BookingForm };
