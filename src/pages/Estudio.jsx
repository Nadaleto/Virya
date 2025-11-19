import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Hero from '../components/Hero.jsx';

const highlights = [
  'Térreo do Edifício Une - Rua Natingui, 862',
  'Funcionamento das 6h às 20h (fechado em feriados)',
  'Estacionamento das 7h às 22h (30 min R$10, 1ª hora R$17, demais horas R$10, diária R$40)',
  'Pagamentos em dinheiro, cartão ou PIX'
];

const Estudio = () => (
  <div className="estudio-page">
    <Hero
      title="Estúdio Virya"
      subtitle="Treinamento e tecnologia"
      description="Espaço com equipamentos Flywheel, plataformas de força e grupos reduzidos."
      backgroundImage="https://source.unsplash.com/random/1600x900/?studio,training"
    />

    <section className="py-5">
      <Container>
        <Row className="g-4">
          {highlights.map((text) => (
            <Col md={6} key={text}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Text>{text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>

    <section className="py-5 bg-light">
      <Container>
        <Row className="align-items-center g-4">
          <Col md={6}>
            <h2>Agende uma visita</h2>
            <p>Conheça o estúdio, entenda nossa metodologia e encontre o melhor horário.</p>
            <div className="d-flex flex-column gap-3">
              <Button variant="success" href="https://wa.me/5511998211173" target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </Button>
              <Button variant="outline-primary" href="mailto:viryafit@gmail.com">
                Agendar por e-mail
              </Button>
              <Button variant="outline-dark" href="tel:+5511998211173">
                Ligar agora
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <div className="ratio ratio-4x3 rounded overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.396460336377!2d-46.69918072383915!3d-23.554200461330716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5701a76d5ce5%3A0x11a14bb1f08c6467!2sR.%20Natingui%2C%20862%20-%20Vila%20Madalena%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005443-001!5e0!3m2!1spt-BR!2sbr!4v1691682064973!5m2!1spt-BR!2sbr"
                allowFullScreen
                loading="lazy"
                title="Mapa do estúdio"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </div>
);

export default Estudio;
