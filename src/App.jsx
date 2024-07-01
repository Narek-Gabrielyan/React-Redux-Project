import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Component/Pages/Layout";
import Home from "./Component/Pages/Home";
import Products from "./Component/Pages/Products";
import Product from "./Component/Pages/Product";
import Cart from "./Component/Pages/Cart";
import "./App.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}
