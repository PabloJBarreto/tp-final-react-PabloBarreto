import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MiNavbar from "./components/Navbar.jsx";
import React from "react";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Listado from "./pages/Listado.jsx";
import Detalle from "./pages/Detalle.jsx";

function App() {
  return (
    <div className="App">
      <div className="AppContent">
        <MiNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Listado />} />
          <Route path="/pokemon/:name" element={<Detalle />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
