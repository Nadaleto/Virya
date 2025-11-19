import PageLayout from '../components/PageLayout.jsx';

const content = {
  hero: {
    title: 'Recursos eletrotermofototerapêuticos',
    subtitle: 'Tecnologia a favor da recuperação',
    description:
      'Modalidades como TENS, correntes interferenciais, laser, ultrassom e terapia combinada auxiliam no controle da dor e na regeneração tecidual.',
    backgroundImage: 'https://source.unsplash.com/random/1600x900/?laser,therapy'
  },
  sections: [
    {
      title: 'Modalidades utilizadas',
      paragraphs: [
        'Trabalhamos com TENS, Corrente Interferencial, Corrente Russa, Aussie, radiofrequência, ultrassom, laser de baixa potência e terapia combinada. Cada recurso tem parâmetros específicos ajustados de acordo com o quadro clínico.'
      ]
    },
    {
      title: 'Benefícios combinados',
      paragraphs: [
        'As correntes elétricas geram analgesia, reduzem espasmos musculares, melhoram o retorno neuromuscular e previnem atrofias por desuso. Laser e ultrassom estimulam circulação, reduzem inflamação e aceleram a regeneração. Quando bem indicados, potencializam outras técnicas manuais e exercícios.'
      ]
    }
  ]
};

const RecursosEletrotermoFototerapeuticos = () => <PageLayout hero={content.hero} sections={content.sections} />;

export default RecursosEletrotermoFototerapeuticos;
