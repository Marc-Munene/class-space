import { create } from "zustand";

const useBookingStore = create((set,) => ({
  bookings: [],

  bookingData: async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/bookings`,
        {
          credentials: "include",
        }
      );

      if (response.ok) {
        const { data } = await response.json();

        // console.log(data);

        set({
          bookings: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
}));

export { useBookingStore };
