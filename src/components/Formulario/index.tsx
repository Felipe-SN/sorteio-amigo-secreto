import { FormEvent, useEffect, useRef, useState } from 'react';
import useAdicionarParticipante from 'state/hooks/useAdicionarParticipante';
import useMensagemErro from 'state/hooks/useMensagemErro';
import data from 'data/imgs.json';
import { colors, sizes } from 'components/UI/variables/index';
import styled from 'styled-components';

const WrapperInputBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  width: 100%;

  & > input {
    border-bottom-left-radius: 45px;
    border-top-left-radius: 45px;
    border: 2px solid ${colors.secundariaA};
    box-shadow: 4px 4px 0px ${colors.secundariaA};
    box-sizing: border-box;
    font-size: 1rem;
    height: ${sizes.inputHeight};
    max-width: 500px;
    padding-left: 52px;
    transition: all ease-out 0.5s;
    width: 100%;
  }
  & > input::placeholder {
    background-image: url(${data.imagens.addPerson});
    background-position: 52px;
    background-repeat: no-repeat;
    background-size: 24px;
    opacity: 0.3;
  }

  & > input:placeholder-shown {
    padding-left: 107px;
  }

  & > input:focus {
    outline: none;
  }

  & > button {
    background-color: #c4c4c4;
    border-bottom-right-radius: 45px;
    border-top-right-radius: 45px;
    border: 2px solid ${colors.secundariaA};
    box-shadow: 4px 4px 0px ${colors.secundariaA};
    box-sizing: border-box;
    color: ${colors.preenchimento};
    cursor: pointer;
    font-size: 1rem;
    height: ${sizes.inputHeight};
    max-width: 227px;
    width: 100%;
  }

  & > button:hover {
    opacity: 0.8;
  }

  & > button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media screen and (max-width: 800px) {
    align-items: center;
    flex-direction: column;
    margin-bottom: 17px;

    & > input {
      border-radius: 45px;
      border: 1px solid ${colors.secundariaA};
      box-shadow: 2px 2px 0px ${colors.secundariaA};
      font-size: 0.875rem;
      height: ${sizes.inputMobileHeight};
      margin-bottom: 10px;
      padding-left: 25px;
      padding-right: 25px;
      text-align: center;
    }

    & > input::placeholder {
      background-position: calc(50% - 127px);
      background-size: 22px;
    }

    & > input:placeholder-shown {
      padding-left: 65px;
    }

    & > button {
      border-radius: 45px;
      border: 1px solid ${colors.secundariaA};
      box-shadow: 2px 2px 0px ${colors.secundariaA};
      font-size: 1rem;
      height: ${sizes.inputMobileHeight};
      min-width: 155px;
    }
  }
`;

const AlertaErro = styled.span`
  position: absolute;
  background-color: #f8d7da;
  border-radius: 8px;
  border: 1px solid #f5c2c7;
  color: #842029;
  font-size: 2rem;
  padding: 16px;
  z-index: 5;

  @media screen and (max-width: 800px) {
    font-size: 1rem;
    margin: 24px 0;
  }
`;

const Formulario = () => {
  const [nomeParticipante, setNomeParticipante] = useState<string>('');
  const inputNome = useRef<HTMLInputElement>(null);
  const { mensagemErro } = useMensagemErro();
  const adicionarNaLista = useAdicionarParticipante();

  const adicionarParticipante = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    adicionarNaLista(nomeParticipante);
    setNomeParticipante('');
    inputNome.current?.focus();
  };

  useEffect(() => {
    inputNome.current?.focus();
  }, []);

  return (
    <form onSubmit={adicionarParticipante}>
      <WrapperInputBtn>
        <input
          onChange={e => setNomeParticipante(e.target.value)}
          placeholder="Insira os nomes dos participantes"
          ref={inputNome}
          type="text"
          value={nomeParticipante}
        />
        <button disabled={nomeParticipante.length < 3} type="submit">
          Adicionar
        </button>
      </WrapperInputBtn>
      {mensagemErro && <AlertaErro role="alert">{mensagemErro}</AlertaErro>}
    </form>
  );
};

export default Formulario;
