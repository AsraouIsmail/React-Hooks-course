/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import AddProduct from './components/AddProduct';
import Products from './components/Products'



ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <AddProduct addNewProduct={addNewProduct}/> */}
    <hr />
    <Products />
  </React.StrictMode>,
  document.getElementById('root')
);

