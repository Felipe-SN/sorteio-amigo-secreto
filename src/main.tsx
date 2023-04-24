import { createRoot } from 'react-dom/client';
import * as React from 'react';
import { RecoilRoot } from 'recoil';
import GlobalStyle from 'components/GlobalStyle';
import Routes from 'routes';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <Routes />
    </RecoilRoot>
  </React.StrictMode>
);
