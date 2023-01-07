import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NavbarContectProvider } from "./context/NavbarContect";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavbarContectProvider>
      <App />
    </NavbarContectProvider>
  </React.StrictMode>
);
