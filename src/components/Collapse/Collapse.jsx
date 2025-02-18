import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Collapse.scss";

const Collapse = ({ title, content, fullWidth = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // Vérifier si le contenu est une chaîne de caractères ou non
  const renderContent = () => {
    if (typeof content === "string") {
      return <p>{content}</p>; // Rendre comme texte dans <p> si c'est une chaîne
    }
    return content; // Sinon, rendre le contenu tel quel (par exemple une <ul>)
  };

  return (
    <section className={`collapse-container ${fullWidth ? "full-width" : ""}`}>
      <div className="header">
        <div className="title-container">
          <h3>{title}</h3>
        </div>
        <button
          className={`toggleButton ${isOpen ? "active" : ""}`}
          onClick={toggleCollapse}
        >
          <img
            src="../assets/images/arrow_back.png"
            alt="Flèche d'ouverture/fermeture"
          />
        </button>
      </div>
      <div className={`content-container ${isOpen ? "appear" : ""}`}>
        <div className="text-content">
          {renderContent()}{" "}
          {/* Appel de la fonction qui rend le contenu de manière dynamique */}
        </div>
      </div>
    </section>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired, // Permet de passer n'importe quel contenu React
  fullWidth: PropTypes.bool,
};

export default Collapse;
