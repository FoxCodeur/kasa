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
          {/* Oui, dans { path, element: Element }, il s'agit bien d'un
       destructuring avec renommage de variable. Dans l'objet issu du tableau 
      routesConfig, il y a une clé element. En utilisant element: Element, 
      je renommes cette clé element en Element, ce qui permet ensuite de 
       l'utiliser avec la syntaxe JSX <Element />.   */}
          {routesConfig.map(({ path, element: Element }, index) => (
            <Route key={index} path={path} element={<Element />} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
