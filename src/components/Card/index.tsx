import styled from 'styled-components';
import { colors } from 'components/UI/variables';
import { ReactNode } from 'react';

const StyledCard = styled.div`
  align-content: center;
  align-items: center;
  background: ${colors.terciaria};
  border-radius: 64px 64px 0px 0px;
  border: 2px solid ${colors.secundariaA};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: -32px;
  padding: 85px;

  @media screen and (max-width: 800px) {
    margin-top: -19px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 48px;
  }
`;

const Card = ({ children }: { children: ReactNode }) => <StyledCard>{children}</StyledCard>;

export default Card;
