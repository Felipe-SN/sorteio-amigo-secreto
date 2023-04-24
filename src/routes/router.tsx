import Cabecalho from 'components/Cabecalho';
import Configuracao from 'pages/Configuracao';
import Sorteio from 'pages/Sorteio';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <Cabecalho />,
    path: '/',
    errorElement: <h2>{'Erro 404!!😵‍💫 Recurso solicitado não encontrado'}</h2>,
    children: [
      { index: true, element: <Configuracao /> },
      { path: 'sorteio', element: <Sorteio /> },
    ],
  },
]);

export default router;
