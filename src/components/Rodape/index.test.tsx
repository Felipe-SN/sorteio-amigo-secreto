import { fireEvent, render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { router, routesConfig } from 'routes/router';
import { useListaParticipantes } from 'state/hooks/useListaParticipantes';
import Rodape from '.';

const mockSorteio = jest.fn();

jest.mock('state/hooks/useListaParticipantes', () => ({ useListaParticipantes: jest.fn() }));

jest.mock('state/hooks/useSorteador', () => ({ useSorteador: () => mockSorteio }));

describe('Comportamento do componente Rodape', () => {
  describe('Onde não existem participantes suficientes', () => {
    beforeEach(() => {
      (useListaParticipantes as jest.Mock).mockReturnValue([]);
    });
    test('A brincadeira não pode ser iniciada', () => {
      const { getByRole } = render(
        <RecoilRoot>
          <Rodape />
        </RecoilRoot>
      );

      expect(useListaParticipantes()).toHaveLength(0);
      expect(getByRole('button')).toBeDisabled();
    });
  });

  describe('Quando existem participantes suficientes', () => {
    beforeEach(() => {
      (useListaParticipantes as jest.Mock).mockReturnValue(['Ana', 'Pedro', 'Maria']);
    });
    test('A brincadeira pode ser iniciada', () => {
      const { getByRole } = render(
        <RecoilRoot>
          <Rodape />
        </RecoilRoot>
      );

      expect(useListaParticipantes()).toHaveLength(3);
      expect(getByRole('button')).toBeEnabled();
    });

    test('A brincadeira foi iniciada', () => {
      const mockRouter = createMemoryRouter(routesConfig, {
        initialEntries: ['/'],
        initialIndex: 0,
      });
      const mockNavigate = jest.spyOn(router, 'navigate').mockImplementation(() => mockRouter.navigate('/sorteio'));

      const { getByText } = render(
        <RecoilRoot>
          <RouterProvider router={mockRouter} />;
        </RecoilRoot>
      );

      fireEvent.click(getByText('Iniciar brincadeira!'));

      expect(mockSorteio).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith('/sorteio');
      expect(mockRouter.state.location.pathname).toBe('/sorteio');
    });
  });
});
