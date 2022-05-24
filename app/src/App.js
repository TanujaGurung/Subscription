import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
