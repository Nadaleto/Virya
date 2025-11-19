import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';

const SiteNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" fixed="top" bg="dark" variant="dark" expanded={expanded} className="shadow-sm">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Virya
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <NavDropdown title="Sobre nós" id="sobre-nos">
              <NavDropdown.Item as={NavLink} to="/sobre" onClick={() => setExpanded(false)}>
                Sobre
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/filosofia" onClick={() => setExpanded(false)}>
                Filosofia
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/equipe" onClick={() => setExpanded(false)}>
                Equipe
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Serviços" id="servicos">
              <NavDropdown.Item as={NavLink} to="/fisioterapia" onClick={() => setExpanded(false)}>
                Fisioterapia
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/treinamento" onClick={() => setExpanded(false)}>
                Treinamento
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/osteopatia" onClick={() => setExpanded(false)}>
                Osteopatia
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/reabilitacao" onClick={() => setExpanded(false)}>
                Pós-operatório
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/avaliacao" onClick={() => setExpanded(false)}>
                Avaliação Biomecânica
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/reabilitacao-atm" onClick={() => setExpanded(false)}>
                ATM
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/galeria" onClick={() => setExpanded(false)}>
              Galeria
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cliente-info" onClick={() => setExpanded(false)}>
              Clientes
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contato" onClick={() => setExpanded(false)}>
              Contato
            </Nav.Link>
          </Nav>
          <div className="d-flex gap-2">
            <Button variant="outline-light" size="sm" href="https://wa.me/5511998211173" target="_blank" rel="noreferrer">
              WhatsApp
            </Button>
            <Button variant="primary" size="sm" as={NavLink} to="/estudio" onClick={() => setExpanded(false)}>
              Estúdio
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
