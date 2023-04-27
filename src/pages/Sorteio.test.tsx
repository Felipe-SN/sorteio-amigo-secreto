import { act, fireEvent, render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useListaParticipantes } from 'state/hooks/useListaParticipantes.ts';
import { useResultadoSorteio } from 'state/hooks/useResultadoSorteio.ts';
import Sorteio from './Sorteio.tsx';

jest.mock('state/hooks/useListaParticipantes', () => ({
  useListaParticipantes: jest.fn(),
}));

jest.mock('state/hooks/useResultadoSorteio', () => ({
  useResultadoSorteio: jest.fn(),
}));

describe('Na página de sorteio', () => {
  const participantes = ['Ana', 'Maria', 'Joel'];
  const resultado = new Map([
    ['Ana', 'Joel'],
    ['Maria', 'Ana'],
    ['Joel', 'Maria'],
  ]);

  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
    (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
  });

  test('Todos os participantes podem exibir seu amigo secreto', () => {
    const { queryAllByRole } = render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    expect(queryAllByRole('option')).toHaveLength(participantes.length + 1);
  });

  test('O amigo secreto deve ser exibido quando solicitado', () => {
    const { getByPlaceholderText, getByRole } = render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    fireEvent.change(getByPlaceholderText('Selecione o seu nome'), { target: { value: participantes[0] } });
    fireEvent.click(getByRole('button'));

    expect(getByRole('alert')).toBeInTheDocument();
  });

  test('Nome do amigo secreto deve sumir após 5 segundos', async () => {
    jest.useFakeTimers();

    const { getByPlaceholderText, getByRole, queryByRole } = render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    fireEvent.change(getByPlaceholderText('Selecione o seu nome'), { target: { value: participantes[0] } });
    fireEvent.click(getByRole('button'));

    act(() => {
      jest.runAllTimers();
    });

    expect(queryByRole('alert')).not.toBeInTheDocument();
  });
});
