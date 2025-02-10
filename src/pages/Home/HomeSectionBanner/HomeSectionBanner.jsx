import React from "react";
import Banner from "../../../components/Banner/Banner";
import "../../../components/Banner/Banner.scss";

const HomeSectionBanner = () => {
  return (
    <Banner
      text={{ firstLine: "Chez vous, ", secondLine: "partout et ailleurs" }}
      imageUrl=""
    />
  );
};

export default HomeSectionBanner;
