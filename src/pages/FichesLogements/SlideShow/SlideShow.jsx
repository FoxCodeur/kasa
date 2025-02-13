import React from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./SlideShow.scss";
const SlideShow = ({ images }) => {
  return (
    <Carousel
      infiniteLoop={false}
      useKeyboardArrows
      autoPlay={false}
      showThumbs={false}
      showStatus={false}
      showArrows={true}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

// Validation des props avec PropTypes
SlideShow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired, // images doit être un tableau de chaînes de caractères
};

export default SlideShow;
