import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './Hello.jsx';
import './Hello.css';
import './assets/fonts/fonts.css';

ReactDOM.createRoot(document.getElementById('hello-section')).render(
  <React.StrictMode>
    <Hello/>
  </React.StrictMode>,
);
