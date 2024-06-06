//faça uma função que receb um valor inteiro e verifica se o valor é par. a unção deve retornar 1 se o número for par e zero se ímpar.

console.clear();
const teclado = require(`prompt-sync`)
function verificarPar(numero: number): number {
    if (numero % 2 === 0) {
        return 1; // Retorna 1 se o número for par
    } else {
        return 0; // Retorna 0 se o número for ímpar
    }
}

// Testando a função
const numero: numero = parseInt(teclado(`Digite um número inteiro: `)) || 0;
const resultado: number = verificarPar(numero);

if (resultado === 1) {
    console.log(`O número ${numero} é par.`);
} else {
    console.log(`O número ${numero} é ímpar.`);
}
