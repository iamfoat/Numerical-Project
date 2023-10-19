import React from "react";
import { NavBar } from './NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

// import Lagrange from "./test/Lagrange";
import Newton from "./test/Newton";
import Bisection from "./components/Bisection";


function App() {
    return (
        <div className="App">

            <BrowserRouter>
            <NavBar/>
            <Routes>
      
            {/* <Route path='/Lagrange' element={<Lagrange/>}/> */}
            <Route path='/Newton' element={<Newton/>}/>
            <Route path='/Bisection' element={<Bisection/>}/>


        
        
            </Routes>
            </BrowserRouter>
        </div>
        
    );
}

export default App;
