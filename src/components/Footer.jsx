import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="site-footer bg-dark text-light py-5 mt-auto">
    <Container>
      <Row className="gy-4">
        <Col md={4}>
          <h4 className="text-uppercase">Virya</h4>
          <p>Atividade física bem orientada para promover saúde, performance e reabilitação.</p>
        </Col>
        <Col md={4}>
          <h5>Endereços</h5>
          <p className="mb-1">Clínica - Rua Isabel de Castela, 116 - Vila Madalena</p>
          <p>Estúdio - Rua Natingui, 862 - Vila Madalena</p>
        </Col>
        <Col md={4}>
          <h5>Contato</h5>
          <p>WhatsApp: <a href="https://wa.me/5511998211173" className="text-light">11 99821-1173</a></p>
          <p>Email: <a href="mailto:viryafit@gmail.com" className="text-light">viryafit@gmail.com</a></p>
          <p>Instagram: <a href="https://www.instagram.com/viryafisio" className="text-light" target="_blank" rel="noreferrer">@viryafisio</a></p>
        </Col>
      </Row>
      <hr className="border-secondary my-4" />
      <p className="text-center small mb-0">© {new Date().getFullYear()} Virya. Todos os direitos reservados.</p>
    </Container>
  </footer>
);

export default Footer;
