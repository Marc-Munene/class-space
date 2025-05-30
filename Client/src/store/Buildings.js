import { create } from "zustand";

const useBuildingStore = create((set) => ({
  buildings: [],

  buildingData: async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/buildings`,
        {
          credentials: "include",
        }
      );

      if (response.ok) {
        const { data } = await response.json();

        console.log(data);

        set({
          buildings: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
}));

export { useBuildingStore };
