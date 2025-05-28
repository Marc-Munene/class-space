import { X } from "lucide-react";

const Modal = ({ openModal, closeModal, title, children }) => {
  if (!openModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50"
      onClick={closeModal}
    >
      <div
        className="relative bg-white rounded-md p-4 w-[60%]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-500"
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
