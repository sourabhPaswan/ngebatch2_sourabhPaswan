import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Contact from "../views/Contact";
import About from "../views/About";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<>Not Found Err</>} />
    </Routes>
  );
}

export default AppRoutes;
