import React from "react";
import PropTypes from "prop-types";
import "../hebergementCard/HebergementCard.scss";

const HebergementCard = ({ title, cover }) => {
  return (
    <li className="hebergement-card">
      <img
        src={cover}
        alt={`Photo de l'hébergement ${title}`}
        className="hebergement-card__img"
      />
      <h2 className="hebergement-card__title">{title}</h2>
    </li>
  );
};

// Définir les PropTypes pour valider les props
HebergementCard.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default HebergementCard;
