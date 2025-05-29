import { Outlet } from "react-router";
import { Toaster } from "sonner";

const GlobalLayout = () => {
  return (
    <>
      <div>
        <Outlet />
        <Toaster position="top-right" richColors />
      </div>
    </>
  );
};

export { GlobalLayout };
