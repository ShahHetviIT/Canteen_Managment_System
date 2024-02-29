import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Canteen from "../pages/Canteen/Canteen";
import Navbar from "../components/Navbar/Navbar";
import Cart from "../pages/Cart/Cart";

export default function CustomerRoutes() {
  return (
    <div className="relative">
      <div className="sticky top-0 z-50">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/canteen/:name/:id" element={<Canteen />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}
