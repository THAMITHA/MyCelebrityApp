// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles.css'; // Import your CSS file here

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
