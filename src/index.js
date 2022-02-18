import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Apropos from './pages/Apropos.js'
import Dico from './pages/Dico.js'
import Generateur from './pages/Generateur.js'
import Navbar from './composants/Navbar.js'

import { BrowserRouter, Routes, Route } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter App-citation={process.env.PUBLIC_URL}>
      <Navbar/>

      <Routes>

        
        <Route path="/" element={<Generateur />}/>
        <Route path="/dico" element={<Dico />}/>
        <Route path="/apropos" element={<Apropos />}/>
        

        

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);