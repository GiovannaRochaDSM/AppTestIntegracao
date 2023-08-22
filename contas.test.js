const contas = require('./contas');

test("Soma 2 + 5 esperado 7 como resultado",()=> {      // nome do teste | função do Jest
    expect(contas.soma(2,5)).toBe(7)        // espera-se que o resultado da função recebendo os parametros 2 e 5, seja 7. toBe -> que seja, é uma comparação, existem outras.
})                   
