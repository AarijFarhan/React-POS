import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import { CartProvider } from "./context/CartContext"; // Import CartProvider

// Define router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

// Render the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider> {}
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
