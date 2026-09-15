import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive ? "text-blue-500" : "text-black";

  return (
    <header className="header">
      <NavLink to="/" aria-label="Chirag Garg home">
        <img
          src={Logo}
          alt="CG - Chirag Garg"
          style={{
            width: "48px",
            height: "48px",
            objectFit: "contain",
          }}
        />
      </NavLink>

      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>

        <NavLink to="/projects" className={navLinkClass}>
          Projects
        </NavLink>

        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;