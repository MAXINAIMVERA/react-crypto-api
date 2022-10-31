import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from '../src/components/Header'
import CoinsList from './components/CoinsList';
import CoinRow from '../src/components/CoinRow'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <CoinsList/>
   
  </React.StrictMode>
);


