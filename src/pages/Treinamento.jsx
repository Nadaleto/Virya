import PageLayout from '../components/PageLayout.jsx';
import CallToAction from '../components/CallToAction.jsx';
import '../styles/treinamento.css';

const content = {
  hero: {
    title: 'Treinamento',
    subtitle: 'Transferência para a vida',
    description:
      'Aprendizagem motora, sistemas complexos e tecnologias Flywheel Training se encontram para criar aulas que unem força, coordenação e propósito.',
    backgroundImage: 'https://source.unsplash.com/random/1600x900/?training,coach'
  },
  sections: [
    {
      title: 'Corpo como sistema de aprendizagem',
      paragraphs: [
        'No Virya temos por objetivo promover a transferência do treinamento para o bem-estar cotidiano e o desempenho esportivo. O foco das aulas é desenvolver aprendizagem motora com exercícios que associam força e coordenação para encarar as demandas do dia-a-dia.',
        'Acreditamos que o corpo do aluno é um sistema de aprendizagem e não apenas um conjunto de alavancas mecânicas. A hierarquia clássica do cérebro como regente é substituída por uma inteligência integrada ao corpo, apoiada nas discussões sobre sistemas complexos e teoria ecológica aplicada ao treinamento.'
      ]
    },
    {
      title: 'Tecnologia e acompanhamento',
      paragraphs: [
        'Utilizamos equipamentos isoinerciais Flywheel Training, banquetas, coletes, racks e isoplates para potencializar exercícios iso e semi-isométricos. Avaliar a eficácia do treinamento de forma longitudinal demanda plataformas de força e acelerômetros, recursos presentes em nossa rotina.'
      ],
      list: [
        'Sistemas complexos: força e resistência atuando em sinergia',
        'Teoria ecológica da percepção e ação aplicada ao treino',
        'Aprendizagem diferencial com foco externo e variação constante',
        'Tecnologias Flywheel e plataformas de isometria',
        'Avaliação longitudinal com sensores acessíveis'
      ]
    }
  ]
};

const Treinamento = () => (
  <div className="treinamento-page">
    <PageLayout hero={content.hero} sections={content.sections} />
    <CallToAction />
  </div>
);

export default Treinamento;
