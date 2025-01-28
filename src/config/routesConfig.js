import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
// Dans routesConfig, chaque élément est un objet représentant une route. Ce tableau contient des informations de
const routesConfig = [
  { path: "/", element: Home, exact: true }, // Composants référencés directement
  { path: "/about", element: About },
  { path: "*", element: ErrorPage },
];

export default routesConfig;
