import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import TourDetails from "./components/TourDetails/TourDetails";

function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<TourDetails />} />
      </Routes>
    </>
  );
}

export default App;
