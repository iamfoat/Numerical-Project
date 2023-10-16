import React from "react";
import './App.css';
import Bisection from './components/Bisection';
import Linear from "./components/Lagrange_Linear";
import Quadratic from "./components/Lagrange_Quadratic";
import Polynomial from "./components/Lagrange_Polynomial";

function App() {
    return (
        <div className="App">
            <header className="App-header">
            <p>Root found by Bisection <Bisection /></p>
            <p>Lagrange Interpolation : Linear <Linear /></p>
            <p>Lagrange Interpolation : Quadratic <Quadratic /></p>
            <p>Lagrange Interpolation : Polynomial <Polynomial /></p>

                
            </header>
        </div>
    );
}

export default App;
