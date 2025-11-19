import PageLayout from '../components/PageLayout.jsx';

const content = {
  hero: {
    title: 'Manipulação articular',
    subtitle: 'Recuperar congruência',
    description:
      'Mobilizações específicas tratam deficiências de movimento e reposicionam superfícies articulares para reduzir dor e restaurar função.',
    backgroundImage: 'https://source.unsplash.com/random/1600x900/?joint,therapy'
  },
  sections: [
    {
      title: 'Por que mobilizar',
      paragraphs: [
        'Desalinhamentos articulares causam dor, déficit de recrutamento motor, perda de estabilidade e de função. Ao restaurar a mobilidade e reduzir a dor, o paciente recupera padrões naturais de movimento e pode avançar com exercícios que consolidam o ganho.'
      ]
    }
  ]
};

const ManipulacaoArticular = () => <PageLayout hero={content.hero} sections={content.sections} />;

export default ManipulacaoArticular;
