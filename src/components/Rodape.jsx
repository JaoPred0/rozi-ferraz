import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Rodape = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5">
      <Container>
        <Row className="mb-4">
          <Col md={4} sm={12} className="mb-3">
            <h5 className="fw-bold">Rozi Ferraz</h5>
            <p>
              Soluções criativas e personalizadas para educação inclusiva.<br />
              Endereço: Rua Salviano Pedroso, 2760, Terra Roxa, Dourados - MS<br />
              Telefone: (67) 1234-5678<br />
              Email: contato@exemplo.com.br
            </p>
          </Col>

          <Col md={4} sm={12} className="mb-3">
            <h5 className="fw-bold">Links Rápidos</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">Início</a></li>
              <li><a href="#servico" className="text-light text-decoration-none">Serviços</a></li>
              <li><a href="#contato" className="text-light text-decoration-none">Contato</a></li>
              <li><a href="#local" className="text-light text-decoration-none">Localização</a></li>
            </ul>
          </Col>

          <Col md={4} sm={12} className="mb-3">
            <h5 className="fw-bold">Siga-nos</h5>
            <div className="d-flex gap-3 fs-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <small>© {new Date().getFullYear()} Rozi Ferraz. Todos os direitos reservados.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Rodape;
