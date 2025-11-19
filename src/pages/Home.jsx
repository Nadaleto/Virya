import { Container, Row, Col, Card } from 'react-bootstrap';
import Hero from '../components/Hero.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import GalleryGrid from '../components/GalleryGrid.jsx';
import VideoSection from '../components/VideoSection.jsx';
import CallToAction from '../components/CallToAction.jsx';
import '../styles/home.css';

const featureCards = [
  {
    title: 'Abordagem integrada',
    description:
      'Avaliar o corpo como um todo e perceber a inter-relação entre as disfunções significa tratar as causas e não apenas a dor.',
    image: 'https://source.unsplash.com/random/800x600/?physiotherapy,movement'
  },
  {
    title: 'Como você usa o corpo importa',
    description:
      'Histórico de atividades e padrões posturais imprimem uma marca em como usamos o corpo e guiam nossas escolhas de treino.',
    image: 'https://source.unsplash.com/random/800x600/?posture,fitness'
  },
  {
    title: 'Aprimorar a função',
    description:
      'Treinar sinergias musculares para realizar movimentos sintonizados garante transferência do treino para a vida real.',
    image: 'https://source.unsplash.com/random/800x600/?athlete,coordination'
  }
];

const videos = [
  {
    title: 'Treinamento inteligente',
    description: 'Metodologias que unem ciência, pedagogia e sensibilidade para cada corpo.',
    url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
  },
  {
    title: 'Reabilitação ativa',
    description: 'Controle motor, terapia manual e tecnologias de avaliação longitudinal.',
    url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
  },
  {
    title: 'Tecnologia e cuidado',
    description: 'Flywheel Training, plataformas de força e sensores para decisões objetivas.',
    url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
  }
];

const galleryImages = Array.from({ length: 9 }).map((_, index) => ({
  src: `https://source.unsplash.com/random/1200x800/?training,fitness&sig=${index}`,
  alt: 'Bastidores Virya'
}));

const testimonials = [
  {
    name: 'Claudia Lima',
    text: 'Sinto meu corpo mais estável e disposto após os treinos integrados e o acompanhamento próximo dos fisioterapeutas.'
  },
  {
    name: 'Luiz Ferreira',
    text: 'O processo de reabilitação pós-operatório foi acolhedor, objetivo e com foco na volta às minhas corridas.'
  },
  {
    name: 'Joana Prado',
    text: 'Encontrei um lugar que combina ciência, tecnologia e humanidade para cuidar do meu movimento.'
  }
];

const Home = () => (
  <div className="home-page">
    <Hero
      title="Atividade física bem orientada"
      subtitle="Treinar e reabilitar com inteligência"
      description="Performance, prevenção e reabilitação acontecem no mesmo continuum quando a avaliação é integrada ao treinamento."
      ctaText="Conheça nossos serviços"
      ctaLink="/treinamento"
      backgroundImage="https://source.unsplash.com/random/1600x900/?fitness,studio"
    />

    <section className="py-5 frase-central">
      <Container>
        <h2 className="text-center">
          Acreditamos que a fronteira entre treinar e reabilitar é tênue. A atividade física bem orientada previne lesões e um bom
          processo de reabilitação promove sinergias musculares que levam à melhora do desempenho.
        </h2>
      </Container>
    </section>

    <section className="py-5">
      <Container>
        <SectionTitle title="Nossos diferenciais" subtitle="Integração total" />
        <Row className="g-4">
          {featureCards.map((feature) => (
            <Col md={4} key={feature.title}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={feature.image} alt={feature.title} />
                <Card.Body>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>

    <VideoSection videos={videos} />

    <section className="py-5 bg-light">
      <Container>
        <SectionTitle title="Depoimentos" subtitle="Histórias reais" />
        <Row className="g-4">
          {testimonials.map((testimonial) => (
            <Col md={4} key={testimonial.name}>
              <Card className="h-100 shadow">
                <Card.Body>
                  <p className="fst-italic">“{testimonial.text}”</p>
                  <Card.Text className="fw-bold mt-3">{testimonial.name}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>

    <GalleryGrid images={galleryImages} />

    <CallToAction />
  </div>
);

export default Home;
