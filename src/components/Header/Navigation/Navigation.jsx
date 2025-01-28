import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <NavLink to="/" className="navigation__link">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navigation__link">
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
