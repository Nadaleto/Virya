import PageLayout from '../components/PageLayout.jsx';

const content = {
  hero: {
    title: 'Teoria ecológica da percepção e ação',
    subtitle: 'Organismo e ambiente',
    description:
      'Movimento é o resultado da interação entre capacidades individuais e oportunidades oferecidas pelo ambiente.',
    backgroundImage: 'https://source.unsplash.com/random/1600x900/?ecology,movement'
  },
  sections: [
    {
      title: 'Affordances em foco',
      paragraphs: [
        'O ambiente muda constantemente, abrindo e fechando possibilidades de ação. Ajustar movimentos é mais sobre sintonizar corpo e tarefas do que sobre ser apenas forte ou resistente. O fortalecimento existe para suportar as forças do mundo real.'
      ]
    },
    {
      title: 'Treinar movimentos, não músculos isolados',
      paragraphs: [
        'Apresentamos treinos que aproximam o aluno de seu nicho, replicando demandas reais para aumentar eficiência motora. Restringimos graus de liberdade para tornar o movimento seguro e eficiente, priorizando sinergias musculares e ações coordenadas próximas da fisiologia humana.'
      ]
    }
  ]
};

const TeoriaEcologica = () => <PageLayout hero={content.hero} sections={content.sections} />;

export default TeoriaEcologica;
