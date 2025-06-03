import { useState, useRef, useEffect } from "react";

const ProfileDropdown = ({ user }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Don't render if no user data yet
  if (!user || !user.name || !user.email) return null;

  return (
    <div
      className="relative flex justify-center bg-gray-50 p-3 rounded-4xl transform  transform-fill duration-300 ease-in-out hover:scale-[1.06] "
      ref={dropdownRef}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-semibold cursor-pointer animate-bounce"
        title="View Profile"
      >
        {user.name.charAt(0).toUpperCase()}
      </button>

      {open && (
        <div className="absolute left-full top-0 ml-3 w-52 bg-white rounded-md shadow-md ring-1 ring-black ring-opacity-5 p-4 z-50">
          <p className="font-semibold text-gray-900">{user.name}</p>
          <p className="text-sm text-gray-600">{user.email}</p>
          
        </div>
      )}
    </div>
  );
};

export { ProfileDropdown };
