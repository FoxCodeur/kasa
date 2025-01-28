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
      <Routes>
        {routesConfig.map((route, index) => (
          // Dans le tableau routesConfig, index itère 0 pour le
          // premier élément, 1 pour le deuxième élément,etc.
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
