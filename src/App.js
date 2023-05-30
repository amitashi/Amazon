import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../src/components/home";

import Checkout from "./components/checkout";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;
