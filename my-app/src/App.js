import React from "react";
import { NavBar } from './NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import Bisection from "./components/Bisection";
import Newton from "./components/Newton";
import Lagrange from "./components/Lagrange";
import FalsePosition from "./components/FalsePosition";
import OnePoint from "./components/Onepoint";

function App() {
    return (
        <div className="App">

            <BrowserRouter>
            <NavBar/>
            <Routes>

            <Route path='/Bisection' element={<Bisection/>}/>
            <Route path='/Newton' element={<Newton/>}/>
            <Route path='/Lagrange' element={<Lagrange/>}/>
            <Route path='/FalsePosition' element={<FalsePosition/>}/>
            <Route path='/OnePoint' element={<OnePoint/>}/>
            

            




        
        
            </Routes>
            </BrowserRouter>
        </div>
        
    );
}

export default App;
