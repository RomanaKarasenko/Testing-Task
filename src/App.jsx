import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import CamperCatalog from './pages/CamperCatalog/CamperCatalog';
import Navbar from './components/NavBar/NavBar';

const App = () => {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CamperCatalog />} />
      </Routes>
    </Router>
  );
};

export default App;