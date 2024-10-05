import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import SideBar from "./components/ui/slider/Slider";
import AboutUs from "./pages/AboutUs";
import Sales from "./pages/Sales";
import ContactPage from "./pages/ContactPage";
import ProfilePage from "./pages/Profile";
import PatientFormPage from "./pages/PatientFormPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SideBar>
                <HomePage />
              </SideBar>
            }
          />
          <Route
            path="/about-us"
            element={
              <SideBar>
                <AboutUs />
              </SideBar>
            }
          />
          <Route
            path="/contact-us"
            element={
              <SideBar>
                <ContactPage />
              </SideBar>
            }
          />
          <Route
            path="/patient-form"
            element={
              <SideBar>
                <PatientFormPage />
              </SideBar>
            }
          />

          <Route
            path="/profile"
            element={
              <SideBar>
                <ProfilePage />
              </SideBar>
            }
          />
          <Route path="/sales" element={<Sales />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
