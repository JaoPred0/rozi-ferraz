import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

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
            <Nav.Link href="#home">Home</Nav.Link>

            {/* Dropdown aparece ao passar o mouse */}
            <NavDropdown
              title="Serviços"
              id="planning-dropdown"
              show={showDropdown}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <NavDropdown.Item href="#event-planning">Xerox e Impressões (PB e colorido)</NavDropdown.Item>
              <NavDropdown.Item href="#weddings">Plastificação</NavDropdown.Item>
              <NavDropdown.Item href="#corporate-events">Criação de Cartazes</NavDropdown.Item>
              <NavDropdown.Item href="#corporate-events">Digitalização de Documentos</NavDropdown.Item>
              <NavDropdown.Item href="#corporate-events">Personalização de Produtos</NavDropdown.Item>
              <NavDropdown.Item href="#corporate-events">Criação de Convites / Lembranças</NavDropdown.Item>
              <NavDropdown.Item href="#corporate-events">Consultoria Escolar para Pais (Autista)</NavDropdown.Item>
              <NavDropdown.Item href="#corporate-events">Etiquetas Escolares</NavDropdown.Item>
              <NavDropdown.Item href="#corporate-events">Venda de kits pedagógicos (Autista)</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#summer-parties">Contato</Nav.Link>
            <Nav.Link href="#pricing">Local</Nav.Link>
            <Nav.Link href="#faqs">Sobre</Nav.Link>
          </Nav>

          {/* Botões Responsivos */}
          <div className="d-flex flex-column flex-lg-row align-items-center gap-3 mt-3 mt-lg-0">
            <NavDropdown title="English" id="language-dropdown">
              <NavDropdown.Item href="#portuguese">Português</NavDropdown.Item>
              <NavDropdown.Item href="#spanish">Español</NavDropdown.Item>
            </NavDropdown>
            <Button variant="dark">Register</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
