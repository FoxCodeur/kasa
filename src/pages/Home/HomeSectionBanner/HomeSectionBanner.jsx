import React from "react";
import "./HomeSectionBanner.scss";
const HomeSectionBanner = () => {
  return (
    <section className="home-section-banner">
      <div className="banner-image"></div> {/* L’image est gérée en CSS */}
      <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
    </section>
  );
};

export default HomeSectionBanner;
