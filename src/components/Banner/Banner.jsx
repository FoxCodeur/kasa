import React from "react";
import PropTypes from "prop-types";
import "./Banner.scss";

const Banner = ({ className, text, imageUrl }) => {
  return (
    <section className={`banner ${className}`}>
      <div
        className="banner__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
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

// Validation des props
Banner.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.shape({
    firstLine: PropTypes.string,
    secondLine: PropTypes.string,
  }),
  imageUrl: PropTypes.string.isRequired,
};

export default Banner;
