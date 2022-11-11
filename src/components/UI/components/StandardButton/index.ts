import { colors, sizes } from 'components/UI/variables';
import data from 'data/imgs.json';
import styled from 'styled-components';

const StandardButton = styled.button`
  background-color: ${colors.secundariaB};
  border-radius: 45px;
  border: 2px solid ${colors.secundariaA};
  box-shadow: 4px 4px 0px ${colors.secundariaA};
  color: ${colors.texto};
  cursor: pointer;
  display: flex;
  font-size: 1.25rem;
  font-weight: 600;
  gap: 26px;
  height: ${sizes.inputHeight};
  justify-content: center;
  max-width: 351px;
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

export default StandardButton;
