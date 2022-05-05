import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "../routes/Create";
import Home from "../routes/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/create" element={Create} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
