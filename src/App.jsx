//import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import MiNavbar from './components/Navbar.jsx'
/* 
import Home from './pages/Home.jsx'
import PokemonLista from './pages/PokemonLista.jsx'
import PokemonDetalle from './pages/PokemonDetalle.jsx'
import Navbar from './components/Navbar.jsx'
// import imagenDeFondo from './images/fondo_claro.png'
import imagenDeFondo from './images/pokeball_pattern.jpg'
 */
function App() {
 

  return (
     <div className='App' >
      <div className='AppContent'>
        <MiNavbar />
       {/*  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<PokemonLista />} />
          <Route path="/pokemon/:name" element={<PokemonDetalle />} />
          </Routes> */}
      </div>
    </div>
  )
}

export default App
