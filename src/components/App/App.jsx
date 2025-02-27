import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import FicheLogement from "../../pages/FichesLogements/FichesLogement";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fiche-logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
