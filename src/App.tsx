import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Cabecalho from 'components/Cabecalho';
import Configuracao from 'pages/Configuracao';
import GlobalStyle from 'components/GlobalStyle';
import Sorteio from 'pages/Sorteio';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Cabecalho />
      <RecoilRoot>
        <Routes>
          <Route path="/">
            <Route index element={<Configuracao />} />
            <Route path="sorteio" element={<Sorteio />} />
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
