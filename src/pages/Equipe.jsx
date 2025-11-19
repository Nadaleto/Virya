import { Container, Row, Col } from 'react-bootstrap';
import Hero from '../components/Hero.jsx';
import CardCoach from '../components/CardCoach.jsx';

const team = [
  {
    name: 'Camila Pagliuca',
    role: 'Fisioterapeuta e professora de Yoga',
    description:
      'Fisioterapeuta, especialista em biomecânica e sistemas complexos, certificada em Yoga Iyengar. Acredita que identificar padrões de movimento é a base para propor exercícios terapêuticos e preservar articulações.',
    image: 'https://source.unsplash.com/random/800x800/?physiotherapist&sig=1'
  },
  {
    name: 'Pedro Bara Zanotto',
    role: 'Bacharel em Esporte',
    description:
      'Especialista em biomecânica, treinamento de alto rendimento e sistemas complexos. Estuda profundamente cada exercício, suas cargas e implicações pedagógicas.',
    image: 'https://source.unsplash.com/random/800x800/?coach&sig=2'
  },
  {
    name: 'Filipe Dovigo',
    role: 'Fisioterapeuta e osteopata',
    description:
      'Graduado pela USP, formação completa em osteopatia e experiência em clubes esportivos. Une reabilitação e performance.',
    image: 'https://source.unsplash.com/random/800x800/?healthcare&sig=3'
  },
  {
    name: 'Andreia Trevizan Alonso',
    role: 'Educadora física e terapeuta manual',
    description:
      'Formada em Educação Física, com passagens por laboratórios clínicos, biomecânica aplicada e treinamentos baseados em sistemas complexos.',
    image: 'https://source.unsplash.com/random/800x800/?trainer&sig=4'
  },
  {
    name: 'Caio Komino',
    role: 'Educador físico e pesquisador',
    description:
      'Residência multiprofissional em reabilitação, mestre em Bioengenharia e experiência em treinamento de pessoas com deficiência e corrida.',
    image: 'https://source.unsplash.com/random/800x800/?physiotherapy&sig=5'
  },
  {
    name: 'Patrícia Nascimento',
    role: 'Educadora física',
    description:
      'Pós-graduada em psicomotricidade, atua com foco em complexidade do movimento para performance, saúde e qualidade de vida.',
    image: 'https://source.unsplash.com/random/800x800/?fitness,coach&sig=6'
  },
  {
    name: 'Lucas Trindade',
    role: 'Especialista em treinamento',
    description:
      'Bacharel em Esporte e Bem-estar nos EUA, personal trainer NASM com experiência em grupos especiais e pós-fisioterapia.',
    image: 'https://source.unsplash.com/random/800x800/?athlete&sig=7'
  },
  {
    name: 'Sandra Venturini',
    role: 'Atendimento ao cliente',
    description:
      'Cuida dos agendamentos, esclarece dúvidas e garante uma experiência acolhedora para pacientes e alunos.',
    image: 'https://source.unsplash.com/random/800x800/?reception&sig=8'
  }
];

const Equipe = () => (
  <div className="equipe-page">
    <Hero
      title="Equipe multidisciplinar"
      subtitle="Pessoas que cuidam de pessoas"
      description="Fisioterapeutas, educadores físicos e especialistas em movimento que compartilham a mesma visão."
      backgroundImage="https://source.unsplash.com/random/1600x900/?team,fitness"
    />
    <section className="py-5">
      <Container>
        <Row className="g-4">
          {team.map((member) => (
            <Col md={4} key={member.name}>
              <CardCoach {...member} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  </div>
);

export default Equipe;
