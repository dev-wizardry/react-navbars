import React, { useState } from "react";
import "./NavBar-1.css";

export default function NavBar1() {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div id="mySidenav" className={`sidenav ${isOpen ? "open" : ""}`}>
        <button className="closebtn" onClick={closeNav}>
          {" "}
          &times;
        </button>
        <a href="/#">About</a>
        <a href="/#">Services</a>
        <a href="/#">Clients</a>
        <a href="/#">Contact</a>
      </div>
      <span className="openIcon" onClick={openNav}>
        &#9776;
      </span>
    </div>
  );
}
