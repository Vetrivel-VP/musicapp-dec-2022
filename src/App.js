import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login } from "./containers";

const App = () => {
  return (
    <div className="w-screen min-h-screen">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
