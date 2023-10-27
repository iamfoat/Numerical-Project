import React from "react";
import { Navbar,Container,NavDropdown,Nav,Offcanvas,Form,Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () =>{
    return (
        <>
          {[false].map((expand) => (
            <Navbar key={expand} bg="dark"variant="dark" expand={expand} className="menu">
              <Container fluid>
                
                <div class ="head">
                <Navbar.Brand >Numerical Project</Navbar.Brand>
                </div>
                <NavDropdown />
                

                {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />   */}

                <Navbar.Offcanvas id={"bar"}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">

                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    
                      <NavDropdown
                        title="Root Of Equation"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}>
                        <NavDropdown.Item href="/Bisection">Bisection</NavDropdown.Item>
                        <br />
                        <NavDropdown.Item href="/FalsePosition">False Position</NavDropdown.Item>
                        <br />
                        <NavDropdown.Item href="/OnePoint">One-Point Iteration</NavDropdown.Item>
                        <br />
                        <NavDropdown.Item href="/NewtonRaphson">Newton Raphson</NavDropdown.Item>
                        <br />
                        <NavDropdown.Item href="/Secant">Secant Method</NavDropdown.Item>
                      </NavDropdown>

                      
                      <NavDropdown
                        title="Solutions Root Of Equation"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}>
                        <NavDropdown.Item href="/GaussEli">Gasuss Elimination</NavDropdown.Item>
                        <br/>
                        <NavDropdown.Item href="/GaussJordan">Gasuss Jordan</NavDropdown.Item>
                        <br/>   
                      </NavDropdown>

                      <NavDropdown
                        title="Interpolation"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}>
                        <NavDropdown.Item href="/Lagrange">Lagrange</NavDropdown.Item>
                        <br/>
                        <NavDropdown.Item href="/Newton">Newton</NavDropdown.Item><NavDropdown.Divider />
                      </NavDropdown>


                    </Nav>
                    
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </>
      );
}
