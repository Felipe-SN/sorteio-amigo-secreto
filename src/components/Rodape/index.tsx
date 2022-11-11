import { useNavigate } from 'react-router-dom';
import { useListaParticipantes } from 'state/hooks/useListaParticipantes';
import { useSorteador } from 'state/hooks/useSorteador';
import { colors, sizes } from 'components/UI/variables/';
import data from 'assets/data/index.json';
import styled from 'styled-components';

const FooterConfig = styled.footer`
  margin-top: 15px;
  align-items: center;
  display: flex;
  gap: 143px;
  justify-content: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 24px;
    margin-top: 18px;
  }
`;

const StandardButton = styled.button`
  background-color: ${colors.secundariaB};
  border-radius: 45px;
  border: 2px solid ${colors.secundariaA};
  box-shadow: 4px 4px 0px ${colors.secundariaA};
  color: ${colors.texto};
  cursor: pointer;
  max-width: 351px;
  gap: 26px;
  display: flex;
  font-size: 1.25rem;
  font-weight: 600;
  height: ${sizes.inputHeight};
  justify-content: center;
  place-items: center;
  width: 100%;

  &::before {
    background-image: url(${data.imagens.play});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    content: '';
    height: 40px;
    width: 40px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:hover {
    background-color: ${colors.primaria};
  }

  @media screen and (max-width: 800px) {
    border: 1px solid ${colors.secundariaA};
    box-shadow: 2px 2px 0px ${colors.secundariaA};
    font-size: 1rem;
    font-weight: 600;
    height: 64px;
    text-align: center;
    width: 155px;

    &::before {
      display: none;
    }
  }
`;

const Sacolas = styled.img`
  @media screen and (max-width: 800px) {
    height: 98px;
    width: 127px;
  }
`;

const Rodape = () => {
  const listaParticipantes = useListaParticipantes();
  const navigate = useNavigate();
  const sortear = useSorteador();

  const iniciar = () => {
    sortear();
    navigate('/sorteio');
  };

  return (
    <FooterConfig>
      <StandardButton
        disabled={listaParticipantes.length < 3}
        onClick={() => iniciar()}
      >
        Iniciar brincadeira!
      </StandardButton>
      <Sacolas
        src={data.imagens.sacolas}
        alt="Sacolas de compras"
        aria-hidden={true}
      />
    </FooterConfig>
  );
};

export default Rodape;
