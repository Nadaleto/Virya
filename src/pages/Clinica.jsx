import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Hero from '../components/Hero.jsx';

const infoCards = [
  {
    title: 'Secretaria',
    text: 'Segunda a quinta das 8h30 às 17h e sexta das 8h30 às 13h30.'
  },
  {
    title: 'Estacionamento',
    text: 'Uma vaga disponível na clínica e facilidade para estacionar na praça do Sacolão.'
  },
  {
    title: 'Atendimentos',
    text: 'Realizados mediante agendamento de segunda a sexta das 7h às 20h.'
  }
];

const Clinica = () => (
  <div className="clinica-page">
    <Hero
      title="Clínica Virya"
      subtitle="Rua Isabel de Castela, 116"
      description="Espaço pensado para avaliações, fisioterapia e reabilitação integrada."
      backgroundImage="https://source.unsplash.com/random/1600x900/?clinic,rehab"
    />
    <section className="py-5">
      <Container>
        <Row className="g-4">
          {infoCards.map((card) => (
            <Col md={4} key={card.title}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
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
            <h2>Canais de contato</h2>
            <p>Fale com nossa equipe para agendar sessões, esclarecer dúvidas e conhecer o espaço.</p>
            <div className="d-flex flex-column gap-3">
              <Button variant="success" href="https://wa.me/5511998211173" target="_blank" rel="noreferrer">
                Enviar mensagem no WhatsApp
              </Button>
              <Button variant="outline-primary" href="mailto:viryafit@gmail.com">
                Enviar e-mail
              </Button>
              <Button variant="outline-dark" href="tel:+5511998211173">
                Ligar para a clínica
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <div className="ratio ratio-4x3 rounded overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3938612452675!2d-46.70017542383911!3d-23.554293861334198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57b9a313b03f%3A0x60ae6a7acee8012e!2sR.%20Isabel%20de%20Castela%2C%20116%20-%20Vila%20Madalena%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005445-010!5e0!3m2!1spt-BR!2sbr!4v1691681636399!5m2!1spt-BR!2sbr"
                allowFullScreen
                loading="lazy"
                title="Mapa da clínica"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </div>
);

export default Clinica;
