import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokedexScreen from "./pages/PokedexScreen";
import WelcomeScreen from "./pages/WelcomeScreen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/pokedex" element={<PokedexScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
