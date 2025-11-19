import PageLayout from '../components/PageLayout.jsx';

const content = {
  hero: {
    title: 'Tecnologias',
    subtitle: 'Sobrecarga inteligente',
    description:
      'Equipamentos Flywheel Training, plataformas de isometria e sensores aproximam o treino das demandas reais.',
    backgroundImage: 'https://source.unsplash.com/random/1600x900/?technology,fitness'
  },
  sections: [
    {
      title: 'Ferramentas de alta transferência',
      paragraphs: [
        'Desenvolvemos em parceria com a Flywheel Training equipamentos com carga variável e plataformas de isometria. Eles permitem ganhos de sobrecarga mecânica para desenvolver sinergia e força estrutural em tendões e músculos.',
        'O treino isoinercial tem se mostrado eficiente para manutenção e ganho de massa muscular, prevenindo lesões musculares e tendíneas ao enfatizar o controle excêntrico com alta transferência para o dia a dia e o esporte.'
      ]
    },
    {
      title: 'Para todos os perfis',
      paragraphs: [
        'Atendemos jovens, adultos, idosos com pouco histórico de prática corporal e atletas. Pacientes em reabilitação são introduzidos gradualmente a sessões de treinamento, diminuindo o tempo total de tratamento e facilitando a transição para as aulas coletivas ou personalizadas.'
      ]
    }
  ]
};

const Tecnologias = () => <PageLayout hero={content.hero} sections={content.sections} />;

export default Tecnologias;
