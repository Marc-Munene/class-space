import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import { GlobalLayout } from "./pages/protected/GlobalLayout";
import { SignUp } from "./pages/Auth/SignUp";
import { ProtectedWrapper } from "./pages/protected/ProtectedWrapper";
import { DashBoard } from "./pages/protected/DashBoard";
import { Buildings } from "./pages/protected/Buildings";
import { Bookings } from "./pages/protected/Bookings";
import { Hero } from "./pages/public/Hero";
import { LoginPage } from "./pages/Auth/LoginPage";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          {/* Global layout wrapping all routes */}
          <Route element={<GlobalLayout />}>
            {/* public routes */}
            <Route index element={<Hero />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />

            {/* protected routes */}
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
    </GoogleOAuthProvider>
  </StrictMode>
);
