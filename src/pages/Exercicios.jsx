import PageLayout from '../components/PageLayout.jsx';

const content = {
  hero: {
    title: 'Exercícios terapêuticos',
    subtitle: 'Ponte entre reabilitação e vida real',
    description:
      'Manipulações e liberações preparam o terreno, mas são os exercícios que consolidam estratégias motoras eficazes.',
    backgroundImage: 'https://source.unsplash.com/random/1600x900/?therapy,exercise'
  },
  sections: [
    {
      title: 'Responsáveis pela reabilitação efetiva',
      paragraphs: [
        'Os exercícios permitem que estratégias motoras fisiológicas sejam incorporadas e mantidas. Trabalhos passivos como manipulações e liberações miofasciais são necessários para viabilizar movimentos seguros, mas rapidamente os exercícios entram em cena para reforçar o aprendizado.'
      ]
    },
    {
      title: 'Transição para o treinamento',
      paragraphs: [
        'As aulas de treinamento dão suporte ao processo terapêutico e garantem a transição para atividades de vida diária e demandas esportivas.'
      ]
    }
  ]
};

const Exercicios = () => <PageLayout hero={content.hero} sections={content.sections} />;

export default Exercicios;
