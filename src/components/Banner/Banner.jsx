import React from "react";
import PropTypes from "prop-types";
import "./Banner.scss";

// La valeur par défaut de l'image de fond est défini ici
const defaultImageUrl = "/assets/images/panorama.png";

const Banner = ({ className = "", text, imageUrl }) => {
  return (
    <section className={`banner ${className}`}>
      <div
        className="banner__image"
        style={{
          backgroundImage: `url(${imageUrl || defaultImageUrl})`, // Si imageUrl est vide, utilise defaultImageUrl
        }}
      ></div>

      {text && (text.firstLine || text.secondLine) && (
        <h1 className="banner__text">
          {text.firstLine && (
            <span className="banner__text--first">{text.firstLine}</span>
          )}
          {text.secondLine && (
            <span className="banner__text--second">{text.secondLine}</span>
          )}
        </h1>
      )}
    </section>
  );
};

// Validation des props avec PropTypes
Banner.propTypes = {
  className: PropTypes.string,
  text: PropTypes.shape({
    firstLine: PropTypes.string,
    secondLine: PropTypes.string,
  }),
  imageUrl: PropTypes.string, // imageUrl n'est plus obligatoire, elle peut être vide
};

export default Banner;
