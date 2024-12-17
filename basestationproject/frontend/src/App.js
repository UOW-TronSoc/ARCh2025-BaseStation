import React from "react";
import HelloWorld from "./pages/HelloWorld";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TestRosListener from "./pages/TestROSListener";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/HelloWorld" element={<HelloWorld />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/ros-listener" element={<TestRosListener />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
