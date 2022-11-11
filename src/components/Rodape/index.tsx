import { useNavigate } from 'react-router-dom';
import { useListaParticipantes } from 'state/hooks/useListaParticipantes';
import { useSorteador } from 'state/hooks/useSorteador';
import data from 'assets/data/index.json';
import styled from 'styled-components';
import StandardButton from 'components/UI/components/StandardButton';

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
