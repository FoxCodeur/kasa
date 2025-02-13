import React from "react";
import { NavLink } from "react-router-dom"; // Importation de NavLink
import "./Header.scss";
import Navigation from "./Navigation/Navigation";
//React ne traite pas le dossier public/ avec Webpack, donc les import ne fonctionneront pas avec des fichiers de public/.
const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <NavLink to="/" className="header__logo-link">
          {" "}
          {/* Utilisation de NavLink ici */}
          <div className="header__logo-title">
            <img
              src="/assets/images/k.png"
              className="header__img-01"
              alt="K"
            />
            <img
              src="/assets/images/Group.png"
              className="header__img-02"
              alt="logo"
            />
            <img
              src="/assets/images/s.png"
              className="header__img-03"
              alt="S"
            />
            <img
              src="/assets/images/a.png"
              className="header__img-04"
              alt="A"
            />
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
