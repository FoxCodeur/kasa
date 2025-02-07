import React from "react";
import { useState } from "react";
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
            src="./assets/images/arrow_back.png"
            alt="Flèche d'ouverture/fermeture"
          />
        </button>
      </div>
      <div className={`content-container ${isOpen ? "appear" : ""}`}>
        <div className="text-content">
          <p>{content}</p>
        </div>
      </div>
    </section>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Collapse;
