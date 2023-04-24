import { colors, sizes } from 'components/UI/variables';
import { useListaParticipantes } from 'state/hooks/useListaParticipantes';
import { useResultadoSorteio } from 'state/hooks/useResultadoSorteio';
import { useState } from 'react';
import Card from 'components/Card';
import { imagens } from 'data/imgs.json';
import StandardButton from 'components/UI/components/StandardButton';
import styled from 'styled-components';

const StyledSorteio = styled.section`
  display: flex;
  flex-direction: column;
  place-items: center;
`;

const CustomSelect = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 35px;
  border: 2px solid ${colors.secundariaA};
  box-shadow: 2px 2px 1px 0px ${colors.secundariaA};
  color: ${colors.preenchimento};
  display: grid;
  font-size: 1rem;
  grid-template-areas: 'customSelect';
  height: 75px;
  max-width: 476px;
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;

  &::after {
    background-color: ${colors.preenchimento};
    clip-path: polygon(100% 0%, 0% 0%, 50% 100%);
    content: '';
    grid-area: customSelect;
    height: 8px;
    justify-self: end;
    pointer-events: none;
    width: 16px;
  }

  @media screen and (max-width: 800px) {
    border: 1px solid ${colors.secundariaA};
    box-shadow: 2px 2px 0px ${colors.secundariaA};
    height: ${sizes.inputMobileHeight};
    padding-left: 28px;
    padding-right: 28px;
  }
`;

const Informativo = styled.p`
  color: ${colors.preenchimento};
  font-size: 1.25rem;
  line-height: 30px;
  margin-bottom: 21px;
  margin-top: 32px;
  max-height: 55px;
  max-width: 425px;
  text-align: center;

  @media screen and (max-width: 800px) {
    width: 328px;
    font-size: 18px;
    line-height: 27px;
  }
`;

const ButtonSortear = styled(StandardButton)`
  gap: 17px;
  max-width: 227px;

  &::before {
    background-image: url(${imagens.dice});
    background-size: auto;
    height: 35px;
    width: 35px;
  }

  @media screen and (max-width: 800px) {
    gap: 13px;
    height: 60px;
    width: 155px;
  }

  &::before {
    display: block;
    height: 24px;
    width: 24px;
  }
`;

const WrapperResultado = styled.div`
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  height: 75px;
  justify-content: center;
  padding-top: 20px;
  width: 100%;

  @media screen and (max-width: 800px) {
    height: 65px;
  }
`;

const Resultado = styled.p`
  color: ${colors.secundariaB};
  font-size: 1.55rem;

  @media screen and (max-width: 800px) {
    font-size: 1.125rem;
  }
`;

const FooterSorteio = styled.footer`
  display: flex;
  flex-direction: column;
  place-items: center;
`;

const Airplane = styled.img`
  height: 136px;
  width: 150px;

  @media screen and (max-width: 800px) {
    height: 114px;
    width: 125px;
  }
`;

const Sorteio = () => {
  const [participanteDaVez, setParticipanteDaVez] = useState('default');
  const [amigoSecreto, setAmigoSecreto] = useState<string | undefined>('');
  const listaParticipantes = useListaParticipantes();
  const resultado = useResultadoSorteio();

  const sortear = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez));
      setTimeout(() => setAmigoSecreto(''), 5000);
    }
  };

  return (
    <Card>
      <StyledSorteio>
        <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={sortear}>
          <CustomSelect>
            <select
              id="participanteDaVez"
              name="participanteDaVez"
              title="Participante da vez"
              onChange={e => setParticipanteDaVez(e.target.value)}
              placeholder="Selecione o seu nome"
              required
              value={participanteDaVez}
            >
              <option disabled value="default">
                Selecione o seu nome
              </option>
              {listaParticipantes.map(participante => (
                <option key={participante}>{participante}</option>
              ))}
            </select>
          </CustomSelect>
          <Informativo>Clique em sortear para ver quem é seu amigo secreto!</Informativo>
          <ButtonSortear>Sortear!</ButtonSortear>
        </form>
        <WrapperResultado>{amigoSecreto && <Resultado role="alert">{amigoSecreto}</Resultado>}</WrapperResultado>
      </StyledSorteio>
      <FooterSorteio>
        <Airplane aria-hidden={true} alt="Um desenho de um avião de papel" src={imagens.airplane} />
      </FooterSorteio>
    </Card>
  );
};

export default Sorteio;
