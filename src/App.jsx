import { Routes, Route } from 'react-router-dom';
import SiteNavbar from './components/SiteNavbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import Treinamento from './pages/Treinamento.jsx';
import Fisioterapia from './pages/Fisioterapia.jsx';
import Osteopatia from './pages/Osteopatia.jsx';
import Reabilitacao from './pages/Reabilitacao.jsx';
import ReabilitacaoATM from './pages/ReabilitacaoATM.jsx';
import Avaliacao from './pages/Avaliacao.jsx';
import AvaliacaoIntegrada from './pages/AvaliacaoIntegrada.jsx';
import AvaliacaoLongitudinal from './pages/AvaliacaoLongitudinal.jsx';
import AprendizagemDiferencial from './pages/AprendizagemDiferencial.jsx';
import Tecnologias from './pages/Tecnologias.jsx';
import ClienteInfo from './pages/ClienteInfo.jsx';
import Clinica from './pages/Clinica.jsx';
import Estudio from './pages/Estudio.jsx';
import Exercicios from './pages/Exercicios.jsx';
import Filosofia from './pages/Filosofia.jsx';
import Equipe from './pages/Equipe.jsx';
import ManipulacaoArticular from './pages/ManipulacaoArticular.jsx';
import ManipulacaoMiofascial from './pages/ManipulacaoMiofascial.jsx';
import RecursosEletrotermoFototerapeuticos from './pages/RecursosEletrotermoFototerapeuticos.jsx';
import Sistemas from './pages/Sistemas.jsx';
import TeoriaEcologica from './pages/TeoriaEcologica.jsx';
import Sobre from './pages/Sobre.jsx';
import Galeria from './pages/Galeria.jsx';
import Contato from './pages/Contato.jsx';

const App = () => (
  <div className="app-shell">
    <ScrollToTop />
    <SiteNavbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treinamento" element={<Treinamento />} />
        <Route path="/fisioterapia" element={<Fisioterapia />} />
        <Route path="/osteopatia" element={<Osteopatia />} />
        <Route path="/reabilitacao" element={<Reabilitacao />} />
        <Route path="/reabilitacao-atm" element={<ReabilitacaoATM />} />
        <Route path="/avaliacao" element={<Avaliacao />} />
        <Route path="/avaliacao-integrada" element={<AvaliacaoIntegrada />} />
        <Route path="/avaliacao-longitudinal" element={<AvaliacaoLongitudinal />} />
        <Route path="/aprendizagem-diferencial" element={<AprendizagemDiferencial />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/cliente-info" element={<ClienteInfo />} />
        <Route path="/clinica" element={<Clinica />} />
        <Route path="/estudio" element={<Estudio />} />
        <Route path="/exercicios" element={<Exercicios />} />
        <Route path="/filosofia" element={<Filosofia />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/manipulacao-articular" element={<ManipulacaoArticular />} />
        <Route path="/manipulacao-miofascial" element={<ManipulacaoMiofascial />} />
        <Route path="/recursos-eletrotermofototerapeuticos" element={<RecursosEletrotermoFototerapeuticos />} />
        <Route path="/sistemas" element={<Sistemas />} />
        <Route path="/teoria-ecologica" element={<TeoriaEcologica />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;
