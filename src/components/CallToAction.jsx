import { Container, Button } from 'react-bootstrap';

const CallToAction = () => (
  <section className="cta-section py-5">
    <Container className="text-center">
      <p className="text-uppercase text-muted mb-2">Vamos conversar</p>
      <h2>Pronto para treinar com inteligência e propósito?</h2>
      <p className="lead mb-4">Agende uma visita para conhecer nossos espaços, tecnologias e especialistas.</p>
      <div className="d-flex gap-3 justify-content-center flex-wrap">
        <Button variant="primary" size="lg" href="https://wa.me/5511998211173" target="_blank" rel="noreferrer">
          Falar no WhatsApp
        </Button>
        <Button variant="outline-light" size="lg" href="mailto:viryafit@gmail.com">
          Enviar e-mail
        </Button>
      </div>
    </Container>
  </section>
);

export default CallToAction;
