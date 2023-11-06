import React from "react";
import { Navbar,Container,NavDropdown,Nav,Offcanvas,Form,Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () =>{
    return (
        <>
          {[false].map((expand) => (
            <Navbar key={expand} bg="dark"variant="dark" expand={expand} className="">
              <Container fluid>
                
                <div class ="head">
                <Navbar.Brand ></Navbar.Brand>
                <div class="nav-con">
                  <div class="logo">
                    <a href="#">Numerical Project</a>
                    </div>
                  </div>
                </div>
                <NavDropdown />
                

                {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />   */}

                <Navbar.Offcanvas id={"bar"}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">

                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    
                    <a className="Root">
                      <NavDropdown
                        title="Root Of Equation"
                        id="Root">
                        <a href="/Bisection">Bisection</a>
                        <br />
                        <a href="/FalsePosition">False Position</a>
                        <br />
                        <a href="/OnePoint">One-Point Iteration</a>
                        <br />
                        <a href="/NewtonRaphson">Newton Raphson</a>
                        <br />
                        <a href="/Secant">Secant Method</a>
                      </NavDropdown>
                      </a>

                      <a className="Gauss">
                      <NavDropdown
                        title="Solutions Root Of Equation"
                        id="Gauss">
                        <a href="/GaussEli">Gasuss Elimination</a>
                        <br/>
                        <a href="/GaussJordan">Gasuss Jordan</a>
                        <br/>   
                      </NavDropdown>
                      </a>

                      <a className="Int">
                      <NavDropdown
                        title="Interpolation"
                        id="Inter">
                        <a href="/Lagrange">Lagrange</a>
                        <br/>
                        <a href="/Newton">Newton</a>
                        <br />
                        <a hhref ="/Spline">Spline</a>
                      </NavDropdown>
                      </a>


                    </Nav>
                    
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </>
      );
}
