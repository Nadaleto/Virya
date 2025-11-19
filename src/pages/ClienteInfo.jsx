import { Container, Row, Col, Table } from 'react-bootstrap';
import Hero from '../components/Hero.jsx';

const infosGerais = [
  {
    title: 'Localização e estacionamento',
    description:
      'Unidade Reabilitação: Rua Isabel de Castela, 116 (vaga de garagem). Unidade Treinamento: Rua Natingui, 862, térreo do prédio Une com estacionamento pago (R$ 20 / 1h, das 7h às 21h).'
  },
  {
    title: 'Horários de funcionamento',
    description: 'Reabilitação das 7h às 20h mediante agendamento. Treinamento das 6h às 20h.'
  },
  {
    title: 'O que vestir',
    description: 'Avaliações: homens de shorts e mulheres de top + shorts. Demais sessões com roupas adequadas para atividade física e uso de tênis nas aulas de treinamento.'
  }
];

const infosFisio = [
  {
    title: 'Agendamentos',
    description: 'Agende presencialmente na Rua Isabel de Castela, 116, ou pelo WhatsApp 11 99821-1173.'
  },
  {
    title: 'Pagamentos e pacotes',
    description: 'Sessões são pagas ao final do mês. Pacotes com desconto exigem pagamento antecipado.'
  },
  {
    title: 'Não comparecimento',
    description: 'Cancelamentos precisam ocorrer com 24h de antecedência. Caso contrário, a sessão é cobrada integralmente.'
  },
  {
    title: 'Avaliação inicial',
    description: 'A primeira sessão é sempre uma avaliação. Avaliações biomecânicas e de marcha são indicadas conforme a necessidade.'
  },
  {
    title: 'Reembolso',
    description: 'Com pedido médico, nota fiscal e relatório é possível solicitar reembolso ao plano de saúde. Não atendemos convênios diretamente.'
  },
  {
    title: 'Formas de pagamento',
    description: 'Utilizamos PIX ou transferência bancária. Ao final do mês enviamos o valor correspondente às sessões realizadas.'
  }
];

const valoresFisio = [
  ['Avaliação Fisioterapia', 'R$ 280,00'],
  ['Avaliação Biomecânica', 'R$ 330,00'],
  ['Sessões Fisioterapia', 'R$ 280,00'],
  ['Fisioterapia domiciliar', 'R$ 315,00'],
  ['Osteopatia', 'R$ 330,00']
];

const infosTreino = [
  {
    title: 'Reposição de aulas',
    description:
      'Aulas canceladas pelos professores ou perdidas por motivo de saúde podem ser repostas conforme disponibilidade. Não há reposição para cancelamentos dos alunos, feriados ou recesso de fim de ano.'
  },
  {
    title: 'Férias',
    description: 'Direito a 50% de desconto em um mês por ano para férias, mantendo vaga e horário.'
  },
  {
    title: 'Pagamentos',
    description: 'Treinos individuais ou em grupo são pagos antecipadamente até o 5º dia útil do mês.'
  },
  {
    title: 'Aulas em grupo',
    description: 'Grupos com até 4 alunos. Os professores podem sugerir turmas específicas para equilibrar níveis e objetivos.'
  }
];

const valoresTreino = [
  ['Personal', 'R$ 210,00', 'R$ 840,00', 'R$ 1.680,00'],
  ['Dupla', 'R$ 160,00', 'R$ 640,00', 'R$ 1.280,00'],
  ['Grupo', 'R$ 95,00 a 105,00', 'R$ 420,00', 'R$ 760,00'],
  ['Personal em casa', 'R$ 272,50', 'R$ 1.090,00', 'R$ 2.180,00']
];

const ClienteInfo = () => (
  <div className="cliente-info-page">
    <Hero
      title="Informações para clientes"
      subtitle="Organização e transparência"
      description="Detalhes sobre horários, políticas e valores de fisioterapia e treinamento."
      backgroundImage="https://source.unsplash.com/random/1600x900/?schedule,fitness"
    />

    <section className="py-5">
      <Container>
        <h2 className="mb-4">Informações gerais</h2>
        <Row className="g-4">
          {infosGerais.map((info) => (
            <Col md={4} key={info.title}>
              <div className="p-4 border rounded-4 h-100">
                <h5>{info.title}</h5>
                <p>{info.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>

    <section className="py-5 bg-light">
      <Container>
        <h2 className="mb-4">Fisioterapia</h2>
        <Row className="g-4">
          {infosFisio.map((info) => (
            <Col md={4} key={info.title}>
              <div className="p-4 border rounded-4 h-100 bg-white">
                <h5>{info.title}</h5>
                <p>{info.description}</p>
              </div>
            </Col>
          ))}
        </Row>
        <div className="mt-5">
          <h3>Valores</h3>
          <Table bordered responsive className="mt-3">
            <tbody>
              {valoresFisio.map(([name, value]) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </section>

    <section className="py-5">
      <Container>
        <h2 className="mb-4">Treinamento</h2>
        <Row className="g-4">
          {infosTreino.map((info) => (
            <Col md={6} key={info.title}>
              <div className="p-4 border rounded-4 h-100">
                <h5>{info.title}</h5>
                <p>{info.description}</p>
              </div>
            </Col>
          ))}
        </Row>
        <div className="mt-5">
          <h3>Valores</h3>
          <Table bordered responsive className="mt-3">
            <thead>
              <tr>
                <th>Modalidade</th>
                <th>Valor por aula</th>
                <th>1x por semana</th>
                <th>2x por semana</th>
              </tr>
            </thead>
            <tbody>
              {valoresTreino.map(([modalidade, aula, uma, duas]) => (
                <tr key={modalidade}>
                  <td>{modalidade}</td>
                  <td>{aula}</td>
                  <td>{uma}</td>
                  <td>{duas}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </section>
  </div>
);

export default ClienteInfo;
