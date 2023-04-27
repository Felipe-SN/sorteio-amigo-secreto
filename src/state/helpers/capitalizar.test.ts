import capitalizar from './capitatizar.ts';

describe('O texto inserido deve ser retornado:', () => {
  test('com a primeira letra de cada palavra em maiúsculo', () => {
    const nomeCapitalizado = capitalizar('ALUÍZIO DE BRAGANÇA E GUSMÃO');

    expect(nomeCapitalizado).toEqual('Aluízio De Bragança E Gusmão');
  });
});
