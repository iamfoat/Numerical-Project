import React from "react";
import { Navbar,Container,NavDropdown,Nav,Offcanvas,Form,Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () =>{
    return (
        <>
          {[false].map((expand) => (
            <Navbar key={expand} bg="dark"variant="dark" expand={expand} className="mb-3">
              <Container fluid>
                <Navbar.Brand ></Navbar.Brand>
                <NavDropdown />
                

                {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />   */}

                <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">

                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    
                      <NavDropdown
                        title="Interpolation"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}>
                        <NavDropdown.Item href="/Lagrange">Lagrange</NavDropdown.Item>
                        <br/>
                        <NavDropdown.Item href="/Newton">Newton</NavDropdown.Item><NavDropdown.Divider />
                      </NavDropdown>
            
                      <NavDropdown
                        title="Root Of Equation"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}>
                        <NavDropdown.Item href="/Bisection">Bisection</NavDropdown.Item>
                        <br />
                        <NavDropdown.Item href="/FalsePosition">False Position</NavDropdown.Item><NavDropdown.Divider />


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
