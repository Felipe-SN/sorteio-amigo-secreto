import styled from 'styled-components';
import participanteImg from 'assets/img/participante.png';
import logo from 'assets/img/logo.png';
import logoMobile from 'assets/img/logo-pequeno.png';

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
  background-image: url(${logo});
  width: 351px;
  height: 117px;

  @media screen and (max-width: 800px) {
    background-image: url(${logoMobile});
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
        src={participanteImg}
        alt="Participante com um presente na mão"
      />
    </StyledHeader>
  );
};

export default Cabecalho;
