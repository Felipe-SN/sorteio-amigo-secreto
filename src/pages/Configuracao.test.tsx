import 'jest-styled-components';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { render } from '@testing-library/react';
import { routesConfig } from 'routes/router';
import Configuracao from './Configuracao';

const router = createMemoryRouter(routesConfig, {
  initialEntries: ['/'],
});

describe('A pagina de configuração', () => {
  test('Deve ser renderizada corretamente', () => {
    <RouterProvider router={router} />;
    const { container } = render(
      <RecoilRoot>
        <Configuracao />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
