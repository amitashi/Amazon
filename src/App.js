import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../src/components/home";
import Header from "./components/header";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/check" element={<Header />} />
      </Routes>
    </>
  );
};

export default App;
