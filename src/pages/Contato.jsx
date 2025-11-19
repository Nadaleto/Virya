import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Hero from '../components/Hero.jsx';
import { getContactInfo } from '../services/contactService.js';

const contact = getContactInfo();

const Contato = () => (
  <div className="contato-page">
    <Hero
      title="Contato"
      subtitle="Estamos prontos para ajudar"
      description="Fale com nossa equipe e encontre o melhor caminho para o seu processo."
      backgroundImage="https://source.unsplash.com/random/1600x900/?contact,fitness"
    />
    <section className="py-5">
      <Container>
        <Row className="g-4">
          <Col md={6}>
            <h2>Informações</h2>
            <p>
              WhatsApp: <a href={contact.whatsapp}>11 99821-1173</a>
            </p>
            <p>
              E-mail: <a href={contact.email}>viryafit@gmail.com</a>
            </p>
            <p>
              Instagram:{' '}
              <a href={contact.instagram} target="_blank" rel="noreferrer">
                @viryafisio
              </a>
            </p>
            <p>Clínica: {contact.clinic}</p>
            <p>Estúdio: {contact.studio}</p>
          </Col>
          <Col md={6}>
            <h2>Envie uma mensagem</h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Seu nome" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="nome@email.com" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mensagem</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Como podemos ajudar?" />
              </Form.Group>
              <Button variant="primary">Enviar</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  </div>
);

export default Contato;
