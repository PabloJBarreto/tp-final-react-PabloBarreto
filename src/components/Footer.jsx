import React from 'react';
import {Container, Row} from "react-bootstrap"
function Footer() {
  return (
      <footer>
          <Container fluid>
              <Row className='bg-dark text -white'>
      <p>&copy; Creado por Pablo Barreto | 2025
                      | Todos los derechos reservados</p>
                  </Row>
    </Container>
      </footer>
  );
}

export default Footer;