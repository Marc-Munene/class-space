import { Outlet } from "react-router";

const GlobalLayout = () => {
  return (
    <>
      <div>
        <Outlet />
        {/* <Toaster position="top-right" richColors /> */}
      </div>
    </>
  );
};

export { GlobalLayout };
