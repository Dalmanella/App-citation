import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Apropos from './pages/Apropos.js';
import Dico from './pages/Dico.js';
import Navbar from './composants/Navbar.js';
import NotMatch from './pages/NotMatch';
import Generateur from './pages/Generateur.js';

import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter app-citation={process.env.PUBLIC_URL}>
      <Navbar/>

      <Routes>
        
        <Route path="/generateur" element={<Generateur />}/>
        <Route path="/*" element={<Dico />}/>
        <Route path="/apropos" element={<Apropos />}/>
        <Route path="*" element={<NotMatch />}/>
      
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);