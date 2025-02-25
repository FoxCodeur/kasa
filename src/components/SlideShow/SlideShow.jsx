import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SlideShow.scss";

const SlideShow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveLeftSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const moveRightSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow">
      {images.length > 1 && (
        <>
          <button
            className="slideshow__arrow slideshow__arrow--left"
            onClick={moveLeftSlide}
          >
            ❮
          </button>

          <button
            className="slideshow__arrow slideshow__arrow--right"
            onClick={moveRightSlide}
          >
            ❯
          </button>
        </>
      )}

      <div className="slideshow__slider-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slideshow__slide ${
              index === currentIndex ? "visible" : "hidden"
            }`}
          >
            <div className="slideshow__image-container">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="slideshow__image"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Compteur visible seulement si plus d'une image */}
      {images.length > 1 && (
        <div className="slideshow__counter">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

SlideShow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SlideShow;
