import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './js/Header';
import NavBar from './js/Nav-Bar';
import MainContent from './js/Main-Content';
import Footer from './js/Footer';
import './css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <Header/>
    <MainContent/>
    <Footer/>
  </React.StrictMode>
);


