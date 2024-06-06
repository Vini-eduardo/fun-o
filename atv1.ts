//Vinícius Eduardo Correia
//Faça uma função que recebe um valor inteiro e verifica se o valor é par. A unção deve retornar 1 se o número for par e 0 se for ímpar.

console.clear();
const teclad = require(`prompt-sync`)();

function verificarPar(numero: number): number {
    if (numero % 2 === 0) {
        return 1;
    } else {
        return 0; 
    }
}

const numero: number = parseInt(teclad(`Digite um número inteiro: `));
const resultado: number = verificarPar(numero);

if (resultado === 1) {
    console.log(`O número ${numero} é par.`);
} else {
    console.log(`O número ${numero} é ímpar.`);
}


