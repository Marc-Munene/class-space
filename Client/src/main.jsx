import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import { GlobalLayout } from "./pages/protected/GlobalLayout";
import { LoginPage } from "./pages/Auth/loginPage";
import { SignUp } from "./pages/Auth/SignUp";
import { ProtectedWrapper } from "./pages/protected/ProtectedWrapper";
import { DashBoard } from "./pages/protected/DashBoard";
import { Buildings } from "./pages/protected/Buildings";
import { Bookings } from "./pages/protected/Bookings";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          {/* Auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<ProtectedWrapper />}>
         
            <Route path="/" element={<App />}>

              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/buildings" element={<Buildings />} />
              <Route path="/bookings" element={<Bookings />} />
            </Route>

            
          </Route>

          {/* <App /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
