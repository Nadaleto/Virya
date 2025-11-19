import PageLayout from '../components/PageLayout.jsx';

const content = {
  hero: {
    title: 'Avaliação Longitudinal',
    subtitle: 'Mensurar para evoluir',
    description:
      'Sensores, plataformas de força e protocolos acessíveis medem estabilidade, assimetrias e adaptação ao longo do tempo.',
    backgroundImage: 'https://source.unsplash.com/random/1600x900/?sensor,athlete'
  },
  sections: [
    {
      title: 'Expressar resultados no tempo',
      paragraphs: [
        'Uma das metas do treinamento é diminuir oscilações do centro de massa durante atividades cíclicas como marcha e corrida. A avaliação longitudinal permite verificar se essa estabilidade está sendo alcançada com acelerômetros de bolso e aplicativos específicos durante a prática.'
      ]
    },
    {
      title: 'Ferramentas utilizadas',
      paragraphs: [
        'Medições de isometrias em músculos bi e monoarticulares apontam assimetrias entre membros e o impacto das sessões. Plataformas de força completam o processo, fornecendo dados objetivos para ajustes constantes. Estamos em fase final de implementação desses protocolos em nosso estúdio.'
      ]
    }
  ]
};

const AvaliacaoLongitudinal = () => <PageLayout hero={content.hero} sections={content.sections} />;

export default AvaliacaoLongitudinal;
