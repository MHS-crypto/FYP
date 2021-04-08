import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from './Components/NavBar';
import NavBar1 from './Components/NavBar1';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <NavBar1/>
    <App />
  </BrowserRouter>
 
  </React.StrictMode>,
  document.getElementById('root')
);


