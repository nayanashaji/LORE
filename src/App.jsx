import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import WelcomePage from "./pages/welcome";
import MainPage from "./pages/mainPage";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center" >
      <BrowserRouter>
        <Routes>
          <Route element={<WelcomePage/>} path="/"/>
          <Route element={<MainPage/>} path="/mainPage"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

