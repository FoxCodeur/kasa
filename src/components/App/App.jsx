import React from "react";
import { Route, Routes } from "react-router-dom";
import routesConfig from "../../config/routesConfig";
import "./App.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-container">
        <Routes>
          {/* Oui, dans ce code, route et index sont des props passées à la
         fonction à l'intérieur de la méthode .map(). */}
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
