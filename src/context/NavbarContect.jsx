import React, { createContext, useState } from "react";

export const NavbarContect = createContext({});

export const NavbarContectProvider = ({ children }) => {
  const [links, setLinks] = useState([]);
  const [contact, setContact] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <NavbarContect.Provider
      value={{
        links: links,
        setLinks: setLinks,
        errorMessage: errorMessage,
        setErrorMessage: setErrorMessage,
        contact: contact,
        setContact: setContact,
      }}
    >
      {children}
    </NavbarContect.Provider>
  );
};
