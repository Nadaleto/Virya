import PageLayout from '../components/PageLayout.jsx';
import CallToAction from '../components/CallToAction.jsx';

const content = {
  hero: {
    title: 'Osteopatia',
    subtitle: 'Integração de sistemas',
    description:
      'Restabelecemos mobilidade articular, equilíbrio fascial e função neurológica com técnicas manuais precisas.',
    backgroundImage: 'https://source.unsplash.com/random/1600x900/?osteopathy,manual-therapy'
  },
  sections: [
    {
      title: 'O corpo como unidade',
      paragraphs: [
        'A Osteopatia busca restabelecer a mobilidade do corpo — articulações, músculos, nervos, vísceras e crânio. Integra os diversos sistemas do organismo porque entende que somos únicos e indivisíveis, dependentes de uma boa harmonização para um funcionamento ideal.',
        'Não importa a disfunção: dores cervicais, lombares, cefaleias ou fibromialgia. A Osteopatia sempre procura a causa, investigando motivações para além do local da dor.'
      ]
    },
    {
      title: 'Terapia manual e estilo de vida',
      paragraphs: [
        'O tratamento é conduzido principalmente com terapia manual suave e precisa, além de orientações de estilo de vida que influenciam as disfunções. O objetivo é equilibrar os sistemas e devolver sua função.',
        'Trata-se de uma especialidade consolidada em países como França e Estados Unidos e que ganha cada vez mais espaço no Brasil pelo impacto positivo e duradouro.'
      ]
    }
  ]
};

const Osteopatia = () => (
  <div>
    <PageLayout hero={content.hero} sections={content.sections} />
    <CallToAction />
  </div>
);

export default Osteopatia;
