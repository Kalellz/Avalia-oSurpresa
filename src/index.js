import React from 'react';
import ReactDOM from 'react-dom/client';
import './common.scss';
import Routes from "./Routes.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
