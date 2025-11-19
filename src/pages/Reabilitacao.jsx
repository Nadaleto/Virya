import PageLayout from '../components/PageLayout.jsx';
import CallToAction from '../components/CallToAction.jsx';

const content = {
  hero: {
    title: 'Fisioterapia pré e pós-operatória',
    subtitle: 'Reabilitação trauma e pós-operatório',
    description:
      'Planos personalizados para preparar o corpo antes de cirurgias e acelerar a recuperação funcional após o procedimento.',
    backgroundImage: 'https://source.unsplash.com/random/1600x900/?surgery,rehabilitation'
  },
  sections: [
    {
      title: 'Preparação antes da cirurgia',
      paragraphs: [
        'A fisioterapia pré-operatória fortalece músculos, melhora mobilidade e aumenta a resistência cardiovascular. Essa preparação otimiza a condição física e reduz o risco de complicações durante e após o procedimento cirúrgico.'
      ]
    },
    {
      title: 'Recuperação guiada',
      paragraphs: [
        'No pós-operatório a fisioterapia auxilia na recuperação funcional, promove alívio da dor, previne atrofia muscular e conduz o paciente para retomar independência e qualidade de vida. Os planos são personalizados, com metas claras e acompanhamento próximo.'
      ]
    }
  ]
};

const Reabilitacao = () => (
  <div>
    <PageLayout hero={content.hero} sections={content.sections} />
    <CallToAction />
  </div>
);

export default Reabilitacao;
