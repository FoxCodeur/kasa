import React from "react";
import { Route, Routes } from "react-router-dom";
import routesConfig from "../../../config/routesConfig";
const AppRoutes = () => {
  return (
    <Routes>
      {routesConfig.map(({ path, element: Element }, index) => (
        <Route key={index} path={path} element={<Element />} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
