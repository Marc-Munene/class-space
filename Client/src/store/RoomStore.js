import { create } from "zustand";

const useRoomStore = create((set) => ({
  rooms: [],

  roomData: async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/rooms`,
        {
          credentials: "include",
        }
      );

      if (response.ok) {
        const { data } = await response.json();
        set({
          rooms: data,
        });
      }

      //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
}));

export { useRoomStore };
