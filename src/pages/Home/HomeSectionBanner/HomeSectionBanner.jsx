import React from "react";
import "./HomeSectionBanner.scss";
const HomeSectionBanner = () => {
  return (
    <section className="home-section-banner">
      <div className="banner-image"></div> {/* L’image est gérée côté SCSS */}
      <h1 className="banner-text">
        <span className="first-line">Chez vous, </span>
        <span className="second-line">partout et ailleurs</span>
      </h1>
    </section>
  );
};

export default HomeSectionBanner;
