/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import AddProduct from './components/AddProduct';
import Products from './components/Products'
import { useState } from 'react';
import {UserContext} from './contexts/UserContext'


function App() {

  const [loggedIn, setLoggedIn] = useState(true)
  
  
  return (
    <div className="App">
        <UserContext.Provider value={{loggedIn, setLoggedIn}}>
          <Products />

        </UserContext.Provider>
        
      
     
    </div>
  );
}

export default App;
