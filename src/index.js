import React from 'react';
import ReactDOM from 'react-dom/client';
import './common.scss';
import Home from './Pages/Home/App.js';
import VendaAcai from './Pages/VendaAcai/App.js';
import Signo from './Pages/Signo/App.js';
import Sorveteria from './Pages/Sorveteria/App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sorveteria />
  </React.StrictMode>
);
