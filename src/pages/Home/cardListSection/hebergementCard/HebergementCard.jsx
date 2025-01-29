import React from "react";
import PropTypes from "prop-types";
import "../hebergementCard/HebergementCard.scss";
const HebergementCard = ({ title }) => {
  return (
    <div className="hebergement-card">
      <h2 className="m-font">{title}</h2>
    </div>
  );
};

// Définir les PropTypes pour valider les props
HebergementCard.propTypes = {
  title: PropTypes.string.isRequired, // 'title' doit être une chaîne de caractères et est obligatoire
};

export default HebergementCard;
