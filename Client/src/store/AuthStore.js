import { LogIn } from "lucide-react";
import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  isLoggedIn: false,
  setUser: (user) => {
    set({ user, isLoggedIn: true });
  },

  login: async (formData) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const { data } = await response.json();
        console.log(data);

        set({ user: data, isLoggedIn: true });
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  logOut: async () => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/auth/logout`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );

    if (response.ok) {
      set({ user: null, isLoggedIn: false });
    }
  },
}));

export { useAuthStore };
