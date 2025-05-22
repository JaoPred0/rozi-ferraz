import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        {/* LOGO */}
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img src="/logo.png" alt="Logo" width="40" height="40" className="me-2" />
          <span className="fw-bold">Rozi Ferraz</span>
        </Navbar.Brand>

        {/* MENU MOBILE */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* CONTEÚDO NAVBAR */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto d-flex flex-column flex-lg-row gap-3 text-center">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#servico">Serviços</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
            <Nav.Link href="#local">Local</Nav.Link>
          </Nav>

          {/* Botões Responsivos */}
          <div className="d-flex flex-column flex-lg-row align-items-center gap-3 mt-3 mt-lg-0">
            <Button variant="dark">Register</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
