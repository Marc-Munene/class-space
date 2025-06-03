import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useAuthStore } from "../store/AuthStore";

const BookingDetailsForm = ({
  booking,
  onBookingCancelled,
  onBookingUpdated,
}) => {
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    date: booking?.date || "",
    startTime: booking?.startTime || "",
    endTime: booking?.endTime || "",
    purpose: booking?.purpose || "",
  });
  const navigate = useNavigate();

  const { user } = useAuthStore(); // Get logged-in user
  if (!booking) return null;

  const isBookingOwner = booking.user?._id === user?._id;

  const handleCancelBooking = async () => {
    if (!confirm("Are you sure you want to cancel this booking?")) return;

    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/bookings/${booking._id}`,
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
        navigate("/dashboard");
        if (onBookingCancelled) onBookingCancelled();
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

  const handleEditBooking = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/bookings`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ ...formData, _id: booking._id }),
        }
      );

      const result = await response.json();
      if (response.ok && result.success) {
        toast.success("Booking updated successfully.");
        setEditMode(false);
        if (onBookingUpdated) onBookingUpdated(); // Optional: refetch or update UI
      } else {
        toast.error(result.message || "Failed to update booking.");
      }
    } catch (error) {
      console.error("Error editing booking:", error);
      toast.error("An error occurred while editing the booking.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          {editMode ? (
            <input
              type="date"
              name="date"
              value={formData.date.split("T")[0]}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            />
          ) : (
            <p className="p-2 border rounded-md bg-gray-100">
              {new Date(booking.date).toLocaleDateString()}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Start Time
          </label>
          {editMode ? (
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            />
          ) : (
            <p className="p-2 border rounded-md bg-gray-100">
              {booking.startTime}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            End Time
          </label>
          {editMode ? (
            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            />
          ) : (
            <p className="p-2 border rounded-md bg-gray-100">
              {booking.endTime}
            </p>
          )}
        </div>

        <div className="space-y-1 sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Purpose
          </label>
          {editMode ? (
            <textarea
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            />
          ) : (
            <p className="p-2 border rounded-md bg-gray-100">
              {booking.purpose}
            </p>
          )}
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

      {isBookingOwner && (
        <div className="flex justify-end gap-4 pt-6">
          {editMode ? (
            <>
              <button
                className="px-4 py-2 text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white cursor-pointer rounded-md"
                onClick={handleEditBooking}
                disabled={loading}
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
              <button
                className="px-4 py-2 text-sm font-medium bg-red-500 hover:bg-red-600 cursor-pointer rounded-md"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                className="px-4 py-2 text-sm font-medium bg-green-500 hover:bg-green-600 text-white rounded-md cursor-pointer"
                onClick={() => setEditMode(true)}
              >
                Edit Booking
              </button>
              <button
                className="px-4 py-2 text-sm font-medium bg-red-500 hover:bg-red-600 text-white cursor-pointer rounded-md"
                onClick={handleCancelBooking}
                disabled={loading}
              >
                {loading ? "Cancelling..." : "Cancel Session"}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export { BookingDetailsForm };
