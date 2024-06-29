import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-bgColor">
        <Routes>
          <Route path="/" element={<IntroPage />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
