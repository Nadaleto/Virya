import PageLayout from '../components/PageLayout.jsx';

const content = {
  hero: {
    title: 'Avaliação Integrada',
    subtitle: 'Sistemas complexos em ação',
    description:
      'Identificamos pontos de acesso que organizam o sistema e definimos estratégias terapêuticas com base nessa leitura global.',
    backgroundImage: 'https://source.unsplash.com/random/1600x900/?assessment,therapy'
  },
  sections: [
    {
      title: 'Descobrir o ponto chave',
      paragraphs: [
        'A inter-relação entre articulações, preferências motoras e reação às forças externas faz do organismo um sistema complexo. A avaliação integrada procura identificar o principal ponto de acesso que gera organização no sistema: pé, quadril, pelve ou outros elementos que se retroalimentam e aprofundam uma disfunção.'
      ]
    },
    {
      title: 'Avaliar já é tratar',
      paragraphs: [
        'Durante a avaliação iniciamos o tratamento, pois a partir dessa compreensão definimos o plano de ação com intervenções manuais, exercícios e tecnologias adequadas para reorganizar o movimento e devolver eficiência.'
      ]
    }
  ]
};

const AvaliacaoIntegrada = () => <PageLayout hero={content.hero} sections={content.sections} />;

export default AvaliacaoIntegrada;
