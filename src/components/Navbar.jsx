import { Link } from "react-router-dom";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../images/pokeball.svg";

function MiNavbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="sm">
      <div className="container-fluid">
        <Navbar.Brand>
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Pokemon logo"
          ></img> {''}
            Pokepedia | La Enciclopedia Pokemon
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/pokemon">
              Listado
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default MiNavbar;
