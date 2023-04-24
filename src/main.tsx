import { createRoot } from 'react-dom/client';
import * as React from 'react';
import { RecoilRoot } from 'recoil';
import GlobalStyle from 'components/GlobalStyle';
import RoutesProvider from 'routes/RoutesProvider';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <RoutesProvider />
    </RecoilRoot>
  </React.StrictMode>
);
