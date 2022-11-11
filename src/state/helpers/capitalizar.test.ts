import capitalizar from './capitatizar';

describe('O texto inserido deve ser retornado:', () => {
  test('com a primeira letra de cada palavra em maiúsculo', () => {
    const nome = 'ALUÍZIO DE BRAGANÇA E GUSMÃO';
    const nomeEsperado = 'Aluízio De Bragança E Gusmão';
    const nomeCapitalizado = capitalizar(nome);

    expect(nomeCapitalizado).toEqual(nomeEsperado);
  });
});
