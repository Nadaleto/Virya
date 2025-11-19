import PageLayout from '../components/PageLayout.jsx';
import CallToAction from '../components/CallToAction.jsx';

const content = {
  hero: {
    title: 'Fisioterapia',
    subtitle: 'Movimento como ferramenta',
    description:
      'Tratamos condições dolorosas restituindo padrões adequados de movimento e respeitando a fisiologia articular.',
    backgroundImage: 'https://source.unsplash.com/random/1600x900/?physiotherapy,therapy'
  },
  sections: [
    {
      title: 'Restituir padrões de movimento',
      paragraphs: [
        'No Virya entendemos que o fisioterapeuta é o profissional do movimento e que o tratamento de uma condição dolorosa faz-se pela restituição de padrões adequados. Avaliamos micro e macro movimentos para que cada articulação volte a funcionar de maneira fluida e estável.'
      ]
    },
    {
      title: 'Ferramentas e avaliações',
      paragraphs: [
        'Associamos avaliação clínica, exames de imagem, histórico de atividade física e hábitos posturais para compreender o perfil mecânico de cada paciente. Utilizamos manipulação articular, liberação miofascial, exercícios terapêuticos e recursos eletrotermofototerapêuticos para conduzir o processo.'
      ]
    },
    {
      title: 'Como conduzimos o exercício',
      paragraphs: [
        'Trabalhamos exercícios dentro de amplitudes articulares fisiológicas, com foco no controle de movimentos excessivos e na promoção de estabilidade. A maneira de conduzir o exercício é tão importante quanto a escolha do repertório, por isso combinamos feedbacks claros e tecnologias de sobrecarga controlada.'
      ]
    }
  ]
};

const Fisioterapia = () => (
  <div>
    <PageLayout hero={content.hero} sections={content.sections} />
    <CallToAction />
  </div>
);

export default Fisioterapia;
