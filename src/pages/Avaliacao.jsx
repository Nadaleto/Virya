import PageLayout from '../components/PageLayout.jsx';

const content = {
  hero: {
    title: 'Avaliação Biomecânica Funcional',
    subtitle: 'Conhecer para intervir',
    description:
      'Histórico motor, morfologia e preferências individuais direcionam escolhas terapêuticas e de treinamento.',
    backgroundImage: 'https://source.unsplash.com/random/1600x900/?motion,analysis'
  },
  sections: [
    {
      title: 'História e morfologia importam',
      paragraphs: [
        'A avaliação precisa compreender a história motora do cliente e as características anatômicas que influenciam o movimento. Lesões pregressas indicam fragilidades nas cadeias cinéticas e precisam ser abordadas com ajustes em articulações adjacentes e escolhas permanentes de repertório.'
      ]
    },
    {
      title: 'Olhar integrado',
      paragraphs: [
        'Quadril, coluna e pelve formam um sistema complexo e não podem ser tratados isoladamente. A cervical responde a pequenos desvios do centro de gravidade; o joelho depende do quadril, tornozelo e pé. Quando começamos a olhar o corpo de forma integrada é difícil voltar a pensar em segmentos.'
      ]
    },
    {
      title: 'Perfil biomecânico funcional',
      paragraphs: [
        'Pacientes que desejam aprofundar a compreensão de seus padrões motores podem optar por avaliações detalhadas para definir o perfil biomecânico funcional. Exames como EOS ou tomografias associadas a radiografias ajudam a avaliar torções ósseas e guiar escolhas de exercícios ainda mais específicas.'
      ]
    },
    {
      title: 'Observação do movimento',
      paragraphs: [
        'A avaliação de marcha e corrida revela preferências motoras. Desalinhamentos ou déficits de estabilização aparecem em atividades cíclicas e ajudam a explicar desde pronações excessivas até escolioses dinâmicas. Com essas informações formulamos estratégias mais precisas e eficientes.'
      ]
    }
  ]
};

const Avaliacao = () => <PageLayout hero={content.hero} sections={content.sections} />;

export default Avaliacao;
