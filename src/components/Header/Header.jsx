import React from "react";
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
        <a href="/" className="header__logo-link">
          <div className="header__logo-title">
            <img src={letterK} className="header__img" alt="K" />
            <img src={logo} className="header__img" alt="logo" />
            <img src={letterS} className="header__img" alt="S" />
            <img src={letterA} className="header__img" alt="A" />
          </div>
        </a>
      </div>
      {/* Ajoutez la classe header__nav ici */}
      <nav className="header__nav">
        <Navigation />
      </nav>
    </div>
  );
};

export default Header;
