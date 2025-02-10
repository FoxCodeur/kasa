import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Collapse.scss";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="collapse-container">
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
        {/* Ici, on s'assure que 'content' peut être un texte ou du JSX */}
        <div className="text-content">
          {/* Assurer que 'content' est un node valide */}
          {typeof content === "string" ? <p>{content}</p> : content}
        </div>
      </div>
    </section>
  );
};

// Modifier PropTypes pour accepter n'importe quel type de contenu
Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired, // Remplacer 'string' par 'node' pour accepter du texte ou du JSX
};

export default Collapse;
