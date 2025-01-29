import React from "react";
import "./Home.scss";
import HomeSectionBanner from "./HomeSectionBanner/HomeSectionBanner";
import CardListSection from "./cardListSection/cardListSection";
const Home = () => {
  return (
    <div className="home-page">
      <HomeSectionBanner />
      <CardListSection />
    </div>
  );
};

export default Home;
