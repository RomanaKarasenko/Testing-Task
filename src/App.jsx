import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import CamperCatalog from "./pages/CamperCatalog/CamperCatalog";
import FavouriteCampers from "./pages/FavouriteCampers/FavouriteCampers";
import Navbar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CamperCatalog />} />
        <Route path="/favourites" element={<FavouriteCampers />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default App;
