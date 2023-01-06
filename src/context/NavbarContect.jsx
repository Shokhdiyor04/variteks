import React, { createContext } from "react";

export const NavbarContect = createContext({});

export const NavbarContectProvider = ({ children }) => {
  return <NavbarContect.Provider>{children}</NavbarContect.Provider>;
};
