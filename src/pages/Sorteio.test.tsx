import { act, fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useListaParticipantes } from 'state/hooks/useListaParticipantes';
import { useResultadoSorteio } from 'state/hooks/useResultadoSorteio';
import Sorteio from './Sorteio';

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
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const opcoes = screen.queryAllByRole('option');

    expect(opcoes).toHaveLength(participantes.length + 1);
  });

  test('O amigo secreto deve ser exibido quando solicitado', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText('Selecione o seu nome');
    const botao = screen.getByRole('button');

    fireEvent.change(select, { target: { value: participantes[0] } });
    fireEvent.click(botao);

    const amigoSecreto = screen.getByRole('alert');

    expect(amigoSecreto).toBeInTheDocument();
  });

  test('Nome do amigo secreto deve sumir após 5 segundos', async () => {
    jest.useFakeTimers();

    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText('Selecione o seu nome');
    fireEvent.change(select, { target: { value: participantes[0] } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    act(() => {
      jest.runAllTimers();
    });

    const alerta = screen.queryByRole('alert');
    expect(alerta).not.toBeInTheDocument();
  });
});
