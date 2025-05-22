// import { LoginPage } from "./pages/Auth/loginPage";

// import { SideBar } from "./components/SideBar";
import { Outlet } from "react-router";
import { SideBar } from "./components/SideBar";
import { Hero } from "./pages/public/Hero";

// import { SignUp } from "./pages/Auth/SignUp";

const App = () => {
  return (
    <div className="min-h-screen">
      {/* Inner Div */}
      <div className="flex flex-col md:flex-row text-primary mt-5 md:mt-0">
        <SideBar />

        {/* <Classes /> */}
        <Outlet />
      </div>
    </div>
  );
};

export { App };
