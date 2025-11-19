import PageLayout from '../components/PageLayout.jsx';

const content = {
  hero: {
    title: 'Manipulação miofascial',
    subtitle: 'Cuidar das cadeias conectadas',
    description:
      'Liberação miofascial reduz tensões, melhora circulação e amplia amplitudes articulares para que o movimento aconteça sem dor.',
    backgroundImage: 'https://source.unsplash.com/random/1600x900/?fascia,therapy'
  },
  sections: [
    {
      title: 'Força tensional distribuída',
      paragraphs: [
        'O sistema miofascial faz parte da transmissão de forças que percorrem todo o corpo. Tensões aplicadas em um ponto repercutem em todo o conjunto, podendo gerar disfunções, rigidez e dor em locais distantes.',
        'A liberação miofascial promove relaxamento muscular, melhora da circulação, alívio da dor, aumento da amplitude de movimento e eliminação de aderências.'
      ]
    },
    {
      title: 'Aplicação precisa',
      paragraphs: [
        'No Virya a liberação é executada por profissionais habilitados que utilizam deslizamentos com pressão adequada para reduzir sintomas e preparar o corpo para os exercícios terapêuticos.'
      ]
    }
  ]
};

const ManipulacaoMiofascial = () => <PageLayout hero={content.hero} sections={content.sections} />;

export default ManipulacaoMiofascial;
