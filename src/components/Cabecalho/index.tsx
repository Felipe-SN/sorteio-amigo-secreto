import styled from 'styled-components';
import data from 'data/imgs.json';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 120px;

  @media screen and (max-width: 800px) {
    padding-top: 60px;
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.div`
  background-image: url(${data.imagens.logo});
  width: 351px;
  height: 117px;

  @media screen and (max-width: 800px) {
    background-image: url(${data.imagens.logoPequeno});
    width: 235px;
    height: 199px;
  }
`;

const Participante = styled.img`
  z-index: 1;

  @media screen and (max-width: 800px) {
    width: 290px;
    height: 158px;
  }
`;

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo role="img" aria-label="Sorteador de Amigo Secreto" />
      <Participante
        src={data.imagens.participante}
        alt="Participante com um presente na mão"
      />
    </StyledHeader>
  );
};

export default Cabecalho;
