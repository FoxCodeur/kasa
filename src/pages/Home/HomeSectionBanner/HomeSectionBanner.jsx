import React from "react";
import Banner from "../../../components/Banner/Banner";
import "./HomeSectionBanner.scss";

const HomeSectionBanner = () => {
  return (
    <Banner
      className="home-section-banner"
      text={{ firstLine: "Chez vous, ", secondLine: "partout et ailleurs" }}
      imageUrl="../../../assets/images/panorama.png"
    />
  );
};

export default HomeSectionBanner;
