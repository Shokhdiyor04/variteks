import React from "react";
import { Link } from "react-router-dom";

const ContactPage = ({ props }) => {
  return (
    <div
      className={
        "select-page overflow-y-auto fixed justify-around items-start w-full p-3 h-[calc(100vh-85px)] hidden border z-50 bg-white top-[85px]"
      }
      ref={props.contactPage}
    >
      {props.contact.map((contact) => (
        <Link
          to={contact.url}
          key={contact.id}
          onClick={props.handleContactPageRemoveButton}
        >
          {contact.text}
        </Link>
      ))}
    </div>
  );
};

export default ContactPage;
