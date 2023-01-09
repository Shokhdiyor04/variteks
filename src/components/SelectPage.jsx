import React from "react";
import { Link, NavLink } from "react-router-dom";

const SelectPage = ({ props }) => {
  return (
    <div
      className={
        "select-page overflow-y-auto fixed justify-around w-full p-3 h-[calc(100vh-85px)] hidden border z-50 bg-white top-[85px]"
      }
      ref={props.selectPage}
    >
      {props.links.map((select) => (
        <div className="w-[20%] flex flex-col" key={select.id}>
          <Link
            to={select.title.url}
            className="text-[15px] text-red-600"
            onClick={props.handleSelectPageRemoveButton}
          >
            {select.title.text}
          </Link>
          {select.links.map((link) => (
            <NavLink
              to={link.url}
              key={link.id}
              onClick={props.handleSelectPageRemoveButton}
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SelectPage;
