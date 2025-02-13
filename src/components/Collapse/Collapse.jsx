import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Collapse.scss";

const Collapse = ({ title, content, fullWidth = false }) => {
  // Valeur par défaut ici et non en bas car dépréciation
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
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
          {typeof content === "string" ? <p>{content}</p> : content}
        </div>
      </div>
    </section>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
};

export default Collapse;
