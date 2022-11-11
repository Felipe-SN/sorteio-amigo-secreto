const capitalizar = (texto: string): string => {
  const textoToLowerCase = texto.toLowerCase();
  const capitalize = textoToLowerCase.replace(/(?:^|\s)[A-zÀ-ÿ]/g, letra =>
    letra.toUpperCase()
  );

  return capitalize;
};

export default capitalizar;
