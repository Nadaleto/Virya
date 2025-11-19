import { Container, Row, Col, Card } from 'react-bootstrap';
import Hero from '../components/Hero.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

const pillars = [
  {
    title: 'Filosofia',
    description: 'Esforço correto significa praticar de forma organizada e respeitando a singularidade de cada pessoa.'
  },
  {
    title: 'Espaços integrados',
    description: 'Clínica e estúdio conectados permitem que reabilitação e treinamento aconteçam como um único processo.'
  },
  {
    title: 'Tecnologia e ciência',
    description: 'Equipamentos isoinerciais, plataformas de força e avaliações longitudinais embasam decisões clínicas.'
  }
];

const Sobre = () => (
  <div className="sobre-page">
    <Hero
      title="Sobre a Virya"
      subtitle="Reabilitar, treinar e aprender"
      description="Desde 2008 unimos fisioterapia, osteopatia e treinamento com visão sistêmica e base científica."
      backgroundImage="https://source.unsplash.com/random/1600x900/?about,fitness"
    />
    <section className="py-5">
      <Container>
        <SectionTitle title="Nossos pilares" subtitle="O que nos guia" />
        <Row className="g-4">
          {pillars.map((pillar) => (
            <Col md={4} key={pillar.title}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{pillar.title}</Card.Title>
                  <Card.Text>{pillar.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  </div>
);

export default Sobre;
