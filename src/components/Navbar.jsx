import axios from "axios";
import React, { useContext, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { NavbarContect } from "../context/NavbarContect";
const Navbar = () => {
  const { links, setLinks, setErrorMessage } = useContext(NavbarContect);
  useEffect(() => {
    const getLinks = async (url) => {
      try {
        const response = await axios.get(url);
        setLinks(await response.data);
      } catch (error) {
        console.error(error.message);
        setErrorMessage(error.message);
      }
    };
    getLinks("jsons/selectPage.json");
  });
  const selectPage = useRef(null);
  const handleSelectPageButton = () => {
    selectPage.current.classList.toggle("active");
  };
  if (!links) return null;
  return (
    <>
      <nav className="w-full bg-white min-h-[85px] flex z-20 fixed top-0">
        <div className="nav-logo w-[40%] min-h-[85px] flex justify-center gap-2 items-center">
          <NavLink to={"/"}>
            <img
              src={require("../images/mainPage/logo.png")}
              className="w-[185px]"
              alt="logo"
            />
          </NavLink>
          <NavLink
            to={"/login"}
            className="px-[8px] py-2 w-[180px] h-[20px] text-white bg-red-600 flex justify-center items-center text-[10px] rounded-[25px] hover:text-red-600 hover:bg-white hover hover-red-600 hover:border-[2px] hover:border-red-600 hover:duration-[.5s]"
          >
            Антиварикозные Изделия на заказ
          </NavLink>
        </div>
        <div className="nav-menu w-[35%] min-h-[85px] flex justify-around text-black items-center text-[14px]">
          <NavLink to="about">О нас</NavLink>
          <NavLink
            to="#"
            className="option"
            id="option"
            onClick={handleSelectPageButton}
          >
            Наша продукция <i className="fas fas fa-angle-down"></i>
          </NavLink>
          <NavLink to="blog">Блог</NavLink>
          <NavLink to="#">
            Контакты <i className="fas fas fa-angle-down"></i>
          </NavLink>
        </div>
        <div className="nav-btn w-[25%] min-h-[85px] px-2 flex items-center justify-end gap-2 text-[13px]">
          <div>
            <i className="fa fas fas fa-search"></i>
          </div>
          <a href="/">
            <i className="fa fas fab fab fa-facebook-f"></i>
          </a>
          <a href="/">
            <i className="fab fab fa-instagram"></i>
          </a>
          <a href="/">
            <i className="fa fas fab fa-linkedin"></i>
          </a>
          <a href="/">
            <i className="fa fas fab fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fa fas fab fab fa-youtube"></i>
          </a>
          <select className="rounded-lg text-[10px]">
            <option value="ru">RU</option>
            <option value="tr">TR</option>
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
        </div>
      </nav>
      <div
        className={
          "select-page overflow-y-auto fixed justify-around w-full p-3 h-[calc(100vh-85px)] hidden border z-50 bg-white top-[85px]"
        }
        ref={selectPage}
      >
        {links.map((linkBox) => (
          <div className="w-[20%] flex flex-col" key={linkBox.id}>
            <h2 className="text-[15px] text-red-600">{linkBox.title}</h2>
            {linkBox.links.map((link) => (
              <NavLink
                to={link.url}
                key={link.id}
                onClick={handleSelectPageButton}
              >
                {link.text}
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
