import PageLayout from '../components/PageLayout.jsx';
import CallToAction from '../components/CallToAction.jsx';

const content = {
  hero: {
    title: 'Reabilitação das disfunções de ATM',
    subtitle: 'Integração crânio-mandibular',
    description:
      'Tratamento conservador para dores, tensões e limitações da articulação temporomandibular com abordagem multidisciplinar.',
    backgroundImage: 'https://source.unsplash.com/random/1600x900/?jaw,therapy'
  },
  sections: [
    {
      title: 'Entendendo as DTMs',
      paragraphs: [
        'As disfunções temporomandibulares acometem articulação, musculatura mastigatória e podem impactar estruturas cranianas e cervicais. Suas causas são multifatoriais — traumas, degeneração óssea, hipermobilidade, alterações de mordida, posturas e fatores psicossociais como bruxismo.'
      ]
    },
    {
      title: 'Plano de cuidado',
      paragraphs: [
        'A fisioterapia especialista direciona o tratamento conforme as queixas: dor local ou irradiada, tensão excessiva, dificuldade de mastigar e abrir a boca, dores de cabeça e cervicais. Após avaliação específica iniciamos um plano que frequentemente envolve bucomaxilos, dentistas, fonoaudiólogos e psicólogos para melhores resultados.'
      ]
    }
  ]
};

const ReabilitacaoATM = () => (
  <div>
    <PageLayout hero={content.hero} sections={content.sections} />
    <CallToAction />
  </div>
);

export default ReabilitacaoATM;
