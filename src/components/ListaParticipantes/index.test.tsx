import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useListaParticipantes } from 'state/hooks/useListaParticipantes.ts';
import ListaParticipantes from './index.tsx';

jest.mock('state/hooks/useListaParticipantes', () => ({
  useListaParticipantes: jest.fn(),
}));

describe('Comportamento do componente ListaParticipantes', () => {
  describe('Faz o render da lista de participantes sem elementos', () => {
    beforeEach(() => {
      (useListaParticipantes as jest.Mock).mockReturnValue([]);
    });

    test('A lista renderizada não deve conter elementos', () => {
      const { queryAllByRole } = render(
        <RecoilRoot>
          <ListaParticipantes />
        </RecoilRoot>
      );

      expect(queryAllByRole('listitem')).toHaveLength(0);
    });
  });

  describe('Faz o render da lista de participantes com elementos', () => {
    const participantes = ['Ana', 'Maria'];

    beforeEach(() => {
      (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
    });

    test('A lista renderizada deve conter elementos', () => {
      const { queryAllByRole } = render(
        <RecoilRoot>
          <ListaParticipantes />
        </RecoilRoot>
      );

      expect(queryAllByRole('listitem')).toHaveLength(participantes.length);
    });
  });
});
