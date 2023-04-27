import { act, fireEvent, render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Formulario from './index.tsx';

describe('Teste de comportamento do componente Formulario:', () => {
  test('Quando o input esta vazio, novos participantes não podem ser adicionados', () => {
    const { getByPlaceholderText, getByRole } = render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    expect(getByPlaceholderText('Insira os nomes dos participantes')).toBeInTheDocument();
    expect(getByRole('button')).toBeDisabled();
  });

  test('Adicionar um participante caso exista um nome preenchido', () => {
    const { getByPlaceholderText, getByRole } = render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = getByPlaceholderText('Insira os nomes dos participantes');

    fireEvent.change(input, { target: { value: 'Maria Silva' } });
    fireEvent.click(getByRole('button'));

    expect(input).toHaveFocus();
    expect(input).toHaveValue('');
  });

  test('Nomes duplicados não podem ser adicionados a lista de participantes', () => {
    const { getByPlaceholderText, getByRole } = render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = getByPlaceholderText('Insira os nomes dos participantes');
    const botao = getByRole('button');

    fireEvent.change(input, { target: { value: 'Maria Silva' } });
    fireEvent.click(botao);
    fireEvent.change(input, { target: { value: 'Maria Silva' } });
    fireEvent.click(botao);

    const { textContent } = getByRole('alert');

    expect(textContent).toBe('Nomes duplicados não são permitidos!');
  });

  test('Mensagem de erro deve sumir apos os timers', () => {
    jest.useFakeTimers();
    const { getByPlaceholderText, getByRole, queryByRole } = render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = getByPlaceholderText('Insira os nomes dos participantes');
    const botao = getByRole('button');

    fireEvent.change(input, { target: { value: 'Maria Silva' } });
    fireEvent.click(botao);
    fireEvent.change(input, { target: { value: 'Maria Silva' } });
    fireEvent.click(botao);

    expect(queryByRole('alert')).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    expect(queryByRole('alert')).toBeNull();
  });
});
