import { BookCheck, Building2, LayoutDashboard, LogOut } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { useAuthStore } from "../store/AuthStore";
import { ProfileDropdown } from "./ProfileDropdown";

const SideBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  const { logOut, user } = useAuthStore();

  const navigate = useNavigate();
  return (
    <div className="w-[15%] px-1">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed text-lg top-4 left-4 z-50 p-2 bg-primary text-black rounded"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        ☰
      </button>
      {/* Navigation Sidebar - Hidden on mobile unless toggled */}

      <nav
        className={`aside bg-white fixed space-y-2 md:static p-3  inset-y-0 left-0 z-40 w-full  transform ${
          showMobileMenu
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        } transition-transform duration-300 ease-in-out shadow-lg md:shadow-none`}
      >
        {/* logo link */}
        <NavLink to={"/dashboard"} className="p-4" onClick={closeMobileMenu}>
          <img
            src="/Class-space-nobg.png"
            alt="Classify Logo"
            className="mx-auto cursor-pointer"
            width={160}
          />
        </NavLink>
        {/* dashboard link */}
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            `flex items-center justify-around py-1 md:py-2 lg:py-3 px-2 sm:px-3 md:px-4 rounded-3xl transition-all duration-300 ease-in-out text-xs sm:text-sm md:text-base lg:text-xl 
                  ${
                    isActive
                      ? "bg-blue-100 text-blue-700 scale-[1.08] shadow-2xl"
                      : "hover:backdrop-blur-lg hover:rounded-4xl hover:shadow-2xl hover:bg-gray-200 hover:px-2 sm:hover:px-3 transform transform-fill hover:scale-[1.06]"
                  }`
          }
          onClick={closeMobileMenu}
        >
          <LayoutDashboard size={18} />
          <span className="text-base">Dashboard</span>
        </NavLink>

        {/* bookings link */}
        <NavLink
          to={"/bookings"}
          className={({ isActive }) =>
            `flex items-center justify-around py-1 md:py-2 lg:py-3 px-2 sm:px-3 md:px-4 rounded-3xl transition-all duration-300 ease-in-out text-xs sm:text-sm md:text-base lg:text-xl 
                  ${
                    isActive
                      ? "bg-blue-100 text-blue-700 scale-[1.08] shadow-2xl"
                      : "hover:backdrop-blur-lg hover:rounded-4xl hover:shadow-2xl hover:bg-gray-200 hover:px-2 sm:hover:px-3 transform transform-fill hover:scale-[1.06]"
                  }`
          }
          onClick={closeMobileMenu}
        >
          <BookCheck size={18} />
          <span className="text-base">Bookings</span>
        </NavLink>

        {/* buildings */}
        <NavLink
          to={"/buildings"}
          className={({ isActive }) =>
            `flex items-center justify-around py-1 md:py-2 lg:py-3 px-2 sm:px-3 md:px-4 rounded-3xl transition-all duration-300 ease-in-out text-xs sm:text-sm md:text-base lg:text-xl 
                  ${
                    isActive
                      ? "bg-blue-100 text-blue-700 scale-[1.08] shadow-2xl"
                      : "hover:backdrop-blur-lg hover:rounded-4xl hover:shadow-2xl hover:bg-gray-200 hover:px-2 sm:hover:px-3 transform transform-fill hover:scale-[1.06]"
                  }`
          }
          onClick={closeMobileMenu}
        >
          <Building2 size={18} />
          <span className="text-base">Buildings</span>
        </NavLink>

        {/* Profile dropdown */}
        <div className="p-2 mt-10 rounded-full">
          <span>
            <ProfileDropdown user={user} />
          </span>
        </div>

        {/* logout */}
        <button
          className="flex items-center justify-center  gap-2 rounded-full bg-red-100 w-full py-2 mt-10 hover:bg-red-200 text-red-500 transform transform-fill duration-300 ease-in-out hover:scale-[1.06] cursor-pointer"
          onClick={() => {
            logOut();
            navigate("/");
          }}
        >
          <LogOut size={18} />
          <span className="font-bold text-md">Logout</span>
        </button>
      </nav>
    </div>
  );
};

export { SideBar };
