import { X } from "lucide-react";

const Modal = ({ openModal, closeModal, title, children }) => {
  if (!openModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50"
      onClick={closeModal}
    >
      <div
        className="relative bg-gray-50  rounded-lg p-8 w-[50%]"
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
      >
        {/* Close button inside the modal */}
        <button
          className="absolute top-4 right-4 text-black cursor-pointer"
          onClick={closeModal}
        >
          <X />
        </button>
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export { Modal };
