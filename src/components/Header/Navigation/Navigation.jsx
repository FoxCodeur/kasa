import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "navigation__link l-font-light navigation__link--active"
                : "navigation__link l-font-light"
            }
            end // Cela garantit que le lien est actif uniquement pour la route exacte
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "navigation__link l-font-light navigation__link--active"
                : "navigation__link l-font-light"
            }
            end
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
