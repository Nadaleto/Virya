import PageLayout from '../components/PageLayout.jsx';

const content = {
  hero: {
    title: 'Sistemas complexos',
    subtitle: 'Sinergia acima de isolamentos',
    description:
      'Força e resistência se expressam por cooperação entre segmentos. Treinar é construir soluções motoras robustas.',
    backgroundImage: 'https://source.unsplash.com/random/1600x900/?systems,training'
  },
  sections: [
    {
      title: 'Treinar sinergias',
      paragraphs: [
        'Demandas cotidianas e esportivas exigem movimentos sintonizados às forças reais. A melhora da qualidade de vida e do desempenho não acontece apenas pela similaridade entre exercício e gesto, mas por ciclos de percepção-decisão-execução.',
        'Buscamos proximidade entre as cargas do treino e as cargas do mundo real. Adotamos princípios dos sistemas complexos para lidar com não-linearidade e priorizar interações entre partes.'
      ]
    },
    {
      title: 'Proteção articular',
      paragraphs: [
        'Treinamos co-contrações e restringimos graus de liberdade para preservar articulações e tornar o movimento eficiente. Evitamos flexões com rotação da coluna sob carga e cadeias abertas que não refletem a fisiologia humana.'
      ]
    }
  ]
};

const Sistemas = () => <PageLayout hero={content.hero} sections={content.sections} />;

export default Sistemas;
