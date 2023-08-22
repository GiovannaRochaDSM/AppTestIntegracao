const contas = require('./contas');

test("Soma 2 + 5 esperado 7 como resultado",()=> {      // nome do teste | função do Jest
    expect(contas.soma(2,5)).toBe(7)        // espera-se que o resultado da função recebendo os parametros 2 e 5, seja 7. toBe -> que seja, é uma comparação, existem outras.
})                   

test("Subtracao 5 - 2 esperado 3 como resultado",()=> {      
    expect(contas.subtracao(5,2)).toBe(3)
})

test("Multiplicacao 5 * 2 esperado 10 como resultado",()=> {      
    expect(contas.multiplicacao(5,2)).toBe(10)
})

test("Divisao 10 / 2 esperado 5 como resultado",()=> {      
    expect(contas.divisao(10,2)).toBe(5)
})