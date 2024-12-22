import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ProductProvider from "./contexts/ProductContext/ProductContext.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ProductProvider>
);
