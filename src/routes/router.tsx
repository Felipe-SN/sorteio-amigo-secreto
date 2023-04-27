import { createBrowserRouter } from 'react-router-dom';
import Cabecalho from 'components/Cabecalho';
import Configuracao from 'pages/Configuracao';
import Sorteio from 'pages/Sorteio';

export const routesConfig = [
  {
    element: <Cabecalho />,
    path: '/',
    errorElement: <h2>{'Erro 404!!😵‍💫 Recurso solicitado não encontrado'}</h2>,
    children: [
      { index: true, element: <Configuracao /> },
      { path: 'sorteio', element: <Sorteio /> },
    ],
  },
];

export const router = createBrowserRouter(routesConfig);
