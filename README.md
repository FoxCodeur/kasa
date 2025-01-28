# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Mode d'emploi de l'application
utilisation de rsc pour générer le code de base des composants
Récapitulatif des étapes :

    Initialisation du projet avec Vite et React :
        Créer le projet avec npm create vite@latest.
        Installer les dépendances avec npm install.

    Installation de Sass :
        Exécuter npm install sass pour ajouter Sass au projet.

    Création de la structure des fichiers SCSS :
        Créer le dossier styles/ avec les fichiers SCSS nécessaires.
        Ajouter les imports dans index.scss pour intégrer tous les fichiers SCSS.

            src/
    └── styles/
        ├── _base.scss
        ├── _mixins.scss
        ├── _reset.scss
        ├── _variables.scss
        └── index.scss


    Suppression des éléments inutiles dans App.jsx :
        Retirer les logos et le compteur de base, et importer App.scss à la place de App.css.

    Mettre à jour main.jsx :
        Importer le fichier index.scss pour appliquer les styles globaux à l'application.

    Lancer le projet :
        Utiliser npm run dev pour démarrer le serveur de développement.

    --------------------------------------------------------------------------
     Routage de l'application
    Étape 1 : via NPM
    npm install react-router-dom
    
    Étape 2 : Créer un fichier de configuration routesConfig.js

Crée un fichier routesConfig.js dans un dossier config. Ce fichier va contenir la configuration de toutes tes routes, avec les chemins et les composants associés.

Voici le contenu de routesConfig.js :

import Home from "../pages/Home";
import About from "../pages/About";

// Configuration des routes

const routesConfig = [
  {
    path: "/",
    element: Home, // Composant pour la route Accueil
    exact: true,
  },
  {
    path: "/about",
    element: About, // Composant pour la route À propos
    exact: true,
  },
];

export default routesConfig;

    Étape 3 : Créer les pages Home et About

Ensuite, crée mes deux composants pour les pages Accueil et À propos dans un dossier pages.
Home.js (dans le dossier pages)
import React from "react";

const Home = () => {
  return (
    <div>
      <h2>Accueil</h2>
      <p>Bienvenue sur la page d'accueil de mon application React !</p>
    </div>
  );
};

export default Home;

About.js (dans le dossier pages)
import React from "react";

const About = () => {
  return (
    <div>
      <h2>À propos</h2>
      <p>Cette application est une démonstration de React Router.</p>
    </div>
  );
};

export default About;

    Étape 4 : Configurer le routage dans App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routesConfig from "./config/routesConfig"; // Importer la configuration des routes

import "./App.scss";

const App = () => {
  return (
    <Router>
      <h1>Bienvenue dans mon application React !</h1>
      <p>
        Cette application est configurée avec Vite et React, prête pour
        commencer.
      </p>
      
      {/* Configuration du routage */}
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">À propos</a></li>
        </ul>
      </nav>

      <Routes>
        {routesConfig.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.element />}
            exact={route.exact}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;

Quelques explications :

    Installation de React Router : Nous utilisons react-router-dom pour gérer le routage dans notre application.

    routesConfig.js : Ce fichier contient la configuration de toutes les routes, y compris les chemins et les composants à afficher pour chaque route.

    Composants Home et About : Ces composants représentant les pages de l'application. Ils seront rendus en fonction du chemin choisi par l'utilisateur.

    Configuration du routage dans App.js : Nous avons enveloppé l'application dans le composant Router, puis utilisé le composant Routes pour rendre dynamiquement les routes basées sur la configuration. Les liens de navigation (Accueil et À propos) sont affichés dans un simple menu.

    --------------------------------------------------------------------------
   