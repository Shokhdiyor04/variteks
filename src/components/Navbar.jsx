import axios from "axios";
import React, { useContext, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { NavbarContect } from "../context/NavbarContect";
import SelectPage from "./SelectPage";
import ContactPage from "./ContactPage";
const Navbar = () => {
  const { links, setLinks, setErrorMessage, contact, setContact } = useContext(NavbarContect);
  useEffect(() => {
    const getLinks = async (selectPageUrl, contactPageUrl) => {
      try {
        const responseSelectPage = await axios.get(selectPageUrl);
        const responseContactPage = await axios.get(contactPageUrl);
        setLinks(await responseSelectPage.data);
        setContact(await responseContactPage.data)
      } catch (error) {
        console.error(error.message);
        setErrorMessage(error.message);
      }
    };
    getLinks("jsons/selectPage.json", "jsons/contactPage.json");
  });
  const selectPage = useRef(null);
  const contactPage = useRef(null);
  const navbar = useRef(null);

  window.addEventListener("scroll", (event) => {
    navbar.current.classList.toggle(
      "active",
      event.path[event.path.length - 1].scrollY > 300
    );
  });
  const handleSelectPageButton = () => {
    selectPage.current.classList.toggle("active");
  };
  const handleSelectPageRemoveButton = () => {
    selectPage.current.classList.remove("active");
  };

  const handleContactPageButton = () => {
    contactPage.current.classList.toggle("active");
  };
  const handleContactPageRemoveButton = () => {
    contactPage.current.classList.remove("active");
  };
  if (!links) return null;
  return (
    <>
      <nav className="w-full min-h-[85px] flex z-20 fixed" ref={navbar}>
        <div className="nav-logo w-[40%] min-h-[85px] flex justify-center gap-2 items-center">
          <NavLink to={"/"}>
            <img
              src={require("../images/mainPage/logo.png")}
              className="w-[185px]"
              alt="logo"
              onClick={
                handleSelectPageRemoveButton && handleContactPageRemoveButton
              }
            />
          </NavLink>
          <NavLink
            to={"/login"}
            onClick={
              handleSelectPageRemoveButton && handleContactPageRemoveButton
            }
            className="px-[8px] py-2 w-[180px] h-[20px] text-white bg-red-600 flex justify-center items-center text-[10px] rounded-[25px] hover:text-red-600 hover:bg-white hover hover-red-600 hover:border-[2px] hover:border-red-600 hover:duration-[.5s]"
          >
            Антиварикозные Изделия на заказ
          </NavLink>
        </div>
        <div className="nav-menu w-[35%] min-h-[85px] flex justify-around text-white items-center text-[14px]">
          <NavLink
            to="/about"
            onClick={
              handleSelectPageRemoveButton && handleContactPageRemoveButton
            }
          >
            О нас
          </NavLink>
          <div
            className="option cursor-pointer"
            onClick={() => {
              if (contactPage) {
                handleSelectPageButton();
                handleContactPageRemoveButton();
              } else {
                handleSelectPageButton();
              }
            }}
          >
            Наша продукция <i className="fas fas fa-angle-down"></i>
          </div>
          <NavLink
            to="/blog"
            onClick={
              handleSelectPageRemoveButton && handleContactPageRemoveButton
            }
          >
            Блог
          </NavLink>
          <div
            className="cursor-pointer"
            onClick={() => {
              if (selectPage) {
                handleContactPageButton();
                handleSelectPageRemoveButton();
              } else {
                handleContactPageButton();
              }
            }}
          >
            Контакты <i className="fas fas fa-angle-down"></i>
          </div>
        </div>
        <div className="nav-btn w-[25%] min-h-[85px] px-2 flex items-center justify-end gap-2 text-[13px]">
          <Link to={"/search"}>
            <i className="fas fa-search"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-youtube"></i>
          </Link>
          <select className="rounded-lg text-[10px]">
            <option value="ru">RU</option>
            <option value="tr">TR</option>
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
        </div>
      </nav>
      <SelectPage props={{ handleSelectPageRemoveButton, selectPage, links }} />
      <ContactPage
        props={{ contactPage, contact, handleContactPageRemoveButton }}
      />
    </>
  );
};

export default Navbar;
