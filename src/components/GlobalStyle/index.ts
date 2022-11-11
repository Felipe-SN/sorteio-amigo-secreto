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
  background: ${colors.primaria};
  border: 2px solid ${colors.secundariaA};
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
  color: ${colors.primaria};
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 36px;
}

ul li {
  color: ${colors.preenchimento};
  font-size: 1rem;
  margin-bottom: 8px;
}

ul li:last-child {
  margin-bottom: 0;
}

form {
  align-items: center;
  display: flex;
  flex-direction: column;
}

select {
  appearance: none;
  background-color: inherit;
  border: none;
  color: inherit;
  cursor: inherit;
  font-family: inherit;
  font-size: inherit;
  grid-area: customSelect;
  line-height: inherit;
  margin: 0;
  outline: none;
  width: 100%;
}

select:focus {
  outline: none;
}

@media screen and (max-width: 800px) {
  h2 {
    font-size: 1.25rem;
    text-align: center;
  }
}
`;

export default GlobalStyle;
