import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Components/App';
import { HashRouter } from 'react-router-dom';

const root = createRoot(document.querySelector('#root'));

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
