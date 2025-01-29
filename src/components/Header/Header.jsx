import React from "react";
import { NavLink } from "react-router-dom"; // Importation de NavLink
import "./Header.scss";
import Navigation from "./Navigation/Navigation";
import letterK from "/assets/images/k.png";
import logo from "/assets/images/Group.png";
import letterS from "/assets/images/s.png";
import letterA from "/assets/images/a.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <NavLink to="/" className="header__logo-link">
          {" "}
          {/* Utilisation de NavLink ici */}
          <div className="header__logo-title">
            <img src={letterK} className="header__img" alt="K" />
            <img src={logo} className="header__img" alt="logo" />
            <img src={letterS} className="header__img" alt="S" />
            <img src={letterA} className="header__img" alt="A" />
          </div>
        </NavLink>
      </div>
      <nav className="header__nav">
        <Navigation />
      </nav>
    </div>
  );
};

export default Header;
