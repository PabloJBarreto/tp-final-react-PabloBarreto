import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import react from "../images/react.svg";
import vite from "../images/vite.svg";
import bootstrap from "../images/bootstrap.svg";
import pokeapi from "../images/pokeapi.png";

function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row className="bg-dark text-white p-0">
          <Col className="d-flex justify-content-center">
            <div className="mx-1">
              <Image
                src={react}
                alt="react logo"
                width={20}
                height={20}
                className="img-fluid"
              />
            </div>
            <div className="mx-1">
              <Image
                src={vite}
                alt="vite logo"
                width={20}
                height={20}
                className="img-fluid"
              />
            </div>
            <div className="mx-1">
              <Image
                src={bootstrap}
                alt="bootstrap logo"
                width={20}
                height={20}
                className="img-fluid"
              />
            </div>
            <div className="d-flex flex-column align-items-center">
              <p className="mx-1">Desarrollado con React + Vite + Bootstrap</p>
            </div>
          </Col>
        </Row>
        <Row className="bg-dark text-white p-0">
          <p>&copy; Creado por Pablo Barreto | 2025</p>
        </Row>
        <Row className="bg-dark text-white p-0">
          <Col className="d-flex justify-content-center">
            <div className="mx-1">
              <Image
                src={pokeapi}
                alt="pokeapi logo"
                width={50}
                height={50}
                className="img-fluid"
              />
            </div>
            <div className="d-flex flex-column align-items-center">
              <p className="mx-1">Datos oficiales de PokeAPI</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
