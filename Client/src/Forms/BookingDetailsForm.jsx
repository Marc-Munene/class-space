import { useState } from "react";
import { toast } from "sonner";

const BookingDetailsForm = ({ booking, onBookingCancelled }) => {
  const [loading, setLoading] = useState(false);

  if (!booking) return null;

  const handleCancelBooking = async () => {
    if (!confirm("Are you sure you want to cancel this booking?")) return;

    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/bookings?Id=${booking._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Booking cancelled successfully.");
        if (onBookingCancelled) onBookingCancelled(); // Trigger parent callback
      } else {
        toast.error(result.message || "Failed to cancel booking.");
      }
    } catch (error) {
      console.error("Error cancelling booking:", error);
      toast.error("An error occurred while cancelling the booking.");
    } finally {
      setLoading(false);
    }
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

      <div className="flex justify-end pt-6">
        <button
          className="px-4 py-2 text-sm font-medium bg-red-500 hover:bg-red-600 text-white rounded-md"
          onClick={handleCancelBooking}
          disabled={loading}
        >
          {loading ? "Cancelling..." : "Cancel Booking"}
        </button>
      </div>
    </div>
  );
};

export { BookingDetailsForm };
