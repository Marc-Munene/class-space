import { BookCheck, Building2, LayoutDashboard, LogOut } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

const SideBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };
  return (
    <div className="w-[15%] px-1">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed text-base top-4 left-4 z-50 p-2 bg-primary text-black rounded"
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
        <button to={"/"} className="p-4" onClick={closeMobileMenu}>
          <img
            src="/Class-space-nobg.png"
            alt="Classify Logo"
            className="mx-auto cursor-pointer"
            width={160}
          />
        </button>
        {/* dashboard link */}
        <NavLink
          to={"/dashboard"}
          className="flex items-center p-2 gap-2 w-full  hover:bg-gray-200 hover:rounded-full transform transform-fill duration-300 ease-in-out hover:scale-[1.06] cursor-pointer"
          onClick={closeMobileMenu}
        >
          <LayoutDashboard size={18} />
          <span className="text-base">Dashboard</span>
        </NavLink>

        {/* bookings link */}
        <NavLink
          to={"/bookings"}
          className="flex items-center w-full p-2 gap-2 hover:bg-gray-200 hover:rounded-full transform transform-fill duration-300 ease-in-out hover:scale-[1.06] cursor-pointer "
          onClick={closeMobileMenu}
        >
          <BookCheck size={18} />
          <span className="text-base">Bookings</span>
        </NavLink>

        {/* buildings */}
        <NavLink
          to={"/buildings"}
          className="flex items-center w-full p-2 gap-2 hover:bg-gray-200 hover:rounded-full transform transform-fill duration-300 ease-in-out hover:scale-[1.06] cursor-pointer"
          onClick={closeMobileMenu}
        >
          <Building2 size={18} />
          <span className="text-base">Buildings</span>
        </NavLink>

        {/* logout */}
        <button
          className="flex items-center justify-center  gap-2 rounded-full bg-red-100 w-full py-2 mt-5 hover:bg-red-200 text-red-500 transform transform-fill duration-300 ease-in-out hover:scale-[1.06] cursor-pointer"
          onClick={closeMobileMenu}
        >
          <LogOut size={18} />
          <span className="font-bold text-sm">Logout</span>
        </button>
      </nav>
    </div>
  );
};

export { SideBar };
