/**
* <DAJIR Yousra>
* Version 1.0
*/
/**
 * on charge librairie React pour le fonctionnement de notre app
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * on importe et on charge fichier index.css
 */
import './index.css';

/**
 * on importe le composant ReactJS : App (le composant principal)
 */
import App from './App';
import Name from './components/Name';
import Content from './components/Content';
import DateTime from './components/DateTime';

import reportWebVitals from './reportWebVitals';

const start = ReactDOM.createRoot(document.getElementById('start'));

/**
 * la partie visuelle web html = le render
 */
start.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
