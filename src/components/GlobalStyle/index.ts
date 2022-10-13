import { colors } from 'components/UI/variables';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

html {
  background: ${colors.corPrimaria};
  border: 2px solid ${colors.corBordas};
  font-family: 'Poppins', sans-serif;
}

#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

section {
  max-width: 1024px;
  text-align: center;
  width: 100%;
}

h2 {
  color: ${colors.corPrimaria};
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 36px;
}

ul li {
  color: ${colors.corPreenchimento};
  font-size: 1rem;
  margin-bottom: 8px;
}

ul li:last-child {
  margin-bottom: 0;
}

@media screen and (max-width: 800px) {
  h2 {
    font-size: 1.25rem;
    text-align: center;
  }
}
`;

export default GlobalStyle;
