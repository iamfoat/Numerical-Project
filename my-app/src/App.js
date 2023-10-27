import React from "react";
import { NavBar } from './NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import Bisection from "./components/Root/Bisection";
import Newton from "./components/Interpolation/Newton";
import Lagrange from "./components/Interpolation/Lagrange";
import FalsePosition from "./components/Root/FalsePosition";
import OnePoint from "./components/Root/Onepoint";
import NewtonRaphson from "./components/Root/NewtonRaphson";
import Secant from "./components/Root/Secant";
import GaussEli from "./components/Gauss/Gauss_Elimination";
import GaussJordan from "./components/Gauss/Gauss_Jordan";

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
            <Route path='/NewtonRaphson' element={<NewtonRaphson/>}/>
            <Route path='/Secant' element={<Secant/>}/>
            <Route path='/GaussEli' element={<GaussEli/>}/>
            <Route path='/GaussJordan' element={<GaussJordan/>}/>
            
            
            

            




        
        
            </Routes>
            </BrowserRouter>
        </div>
        
    );
}

export default App;
