import React from "react";
import { NavLink } from "react-router-dom"; // Importation de NavLink
import "./CardListSection.scss";
import hebergements from "../../../data.json";
import HebergementCard from "../cardListSection/hebergementCard/HebergementCard";

const CardListSection = () => {
  return (
    <article>
      <ul className="card-list-section">
        {hebergements.map((hebergement) => (
          <NavLink
            key={hebergement.id}
            to={`/fiche-logement/${hebergement.id}`} // Redirection avec l'ID
            className="card-link"
          >
            <HebergementCard title={hebergement.title} />
          </NavLink>
        ))}
      </ul>
    </article>
  );
};

export default CardListSection;
