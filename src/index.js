import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NavbarContectProvider } from "./context/NavbarContect";

const navbar = document.querySelector('nav'),
  navMenu = document.querySelector('.nav-menu')

window.addEventListener("scroll", (event) => {
  navbar.classList.toggle("active", event.path[1].pageYOffset > 100);
});

window.addEventListener("scroll", (event) => {
  navMenu.classList.toggle("active", event.path[1].pageYOffset > 100);
});

window.addEventListener("scroll", (event) => {
  navbar.classList.toggle("active", event.path[1].pageYOffset > 100);
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavbarContectProvider>
      <App />
    </NavbarContectProvider>
  </React.StrictMode>
);
