import PageLayout from '../components/PageLayout.jsx';

const content = {
  hero: {
    title: 'Aprendizagem diferencial',
    subtitle: 'Pedagogia do movimento',
    description:
      'Comandos externos, demonstrações e variação de contexto mantêm o corpo em aprendizado contínuo.',
    backgroundImage: 'https://source.unsplash.com/random/1600x900/?learning,movement'
  },
  sections: [
    {
      title: 'Comunicar-se com um corpo inteligente',
      paragraphs: [
        'A aprendizagem diferencial parte do pressuposto de que o professor precisa dialogar com um corpo integrado a um cérebro que aprende. O foco da instrução é externo, baseado no layout dos exercícios e em comandos que induzem ao movimento. Em vez de descrever parte por parte, demonstramos ou solicitamos um desfecho.'
      ]
    },
    {
      title: 'Erro como parte do processo',
      paragraphs: [
        'O erro faz parte da exploração e a solução emerge pela exposição ao repertório. Para que a aprendizagem siga acontecendo é preciso variação constante, não necessariamente do repertório inteiro, mas das variáveis que flutuam: posição dos braços, implementos utilizados e demandas do ambiente. Assim geramos estabilidade e variabilidade motora.'
      ]
    }
  ]
};

const AprendizagemDiferencial = () => <PageLayout hero={content.hero} sections={content.sections} />;

export default AprendizagemDiferencial;
