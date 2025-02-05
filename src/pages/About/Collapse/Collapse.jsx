import React from "react";
import "./Collapse.scss";

const Collapse = () => {
  return (
    <section className="collapse-container">
      <div className="header">
        <div className="title-container">
          <h3></h3>
        </div>
        <button className="toggleButton">
          <img
            src="./assets/images/arrow_back.png"
            alt="Flèche d'ouverture/fermeture"
          />
        </button>
      </div>
      <div className="content-container">
        <div className="text-content">
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default Collapse;
