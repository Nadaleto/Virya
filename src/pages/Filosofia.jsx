import PageLayout from '../components/PageLayout.jsx';

const content = {
  hero: {
    title: 'Filosofia Virya',
    subtitle: 'Esforço correto',
    description:
      'Virya significa a energia e o entusiasmo para se engajar em atividades significativas, caminhando rumo ao esforço correto.',
    backgroundImage: 'https://source.unsplash.com/random/1600x900/?philosophy,zen'
  },
  sections: [
    {
      title: 'Engajar-se em atividades significativas',
      paragraphs: [
        'Nossa filosofia é persistir nas áreas de reabilitação e treinamento de forma sistemática até que a apropriação de teorias e práticas produza sessões plenas. Revisamos, abandonamos ou substituímos métodos para que alunos e pacientes sigam em direção ao esforço correto.'
      ]
    },
    {
      title: 'Organização ajustada ao contexto',
      paragraphs: [
        'Em motricidade, vinculamos o esforço correto a ações organizadas, coordenadas e ajustadas ao contexto. Não buscamos padrões ideais a serem repetidos, mas uma prática adaptada à condição de cada pessoa.'
      ]
    },
    {
      title: 'Escolhas intencionais',
      paragraphs: [
        'A escolha do repertório de exercícios, a forma de ensinar movimentos, as técnicas de manipulação e a avaliação são desenhadas para permitir que alunos e pacientes pratiquem atividades significativas com autonomia.'
      ]
    }
  ]
};

const Filosofia = () => <PageLayout hero={content.hero} sections={content.sections} />;

export default Filosofia;
