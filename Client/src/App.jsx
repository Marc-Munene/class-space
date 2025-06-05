import { Outlet } from "react-router";
import { SideBar } from "./components/SideBar";
import { useAuthStore } from "./store/AuthStore";

const App = () => {
  return (
    <div className="min-h-screen">
      {/* Inner Div */}
      <div className="flex flex-col md:flex-row text-primary mt-5 md:mt-0">
        <SideBar />

        {/* Main content area - now takes remaining width and centers its children */}
        <div className="flex-1 overflow-auto">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export { App };
