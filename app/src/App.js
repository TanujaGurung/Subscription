import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./store"

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/cart/:id" element={<CartPage /> }/>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
