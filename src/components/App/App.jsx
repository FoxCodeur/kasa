import React from "react";
import "./App.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AppRoutes from "./AppRoute/Approutes";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-container">
        <AppRoutes /> {/* On intègre le routeur ici */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
