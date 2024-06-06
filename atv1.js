//Vinícius Eduardo Correia
//Faça uma função que recebe um valor inteiro e verifica se o valor é par. A unção deve retornar 1 se o número for par e 0 se for ímpar.
console.clear();
var teclad = require("prompt-sync")();
function verificarPar(numero) {
    if (numero % 2 === 0) {
        return 1;
    }
    else {
        return 0;
    }
}
var numero = parseInt(teclad("Digite um n\u00FAmero inteiro: "));
var resultado = verificarPar(numero);
if (resultado === 1) {
    console.log("O n\u00FAmero ".concat(numero, " \u00E9 par."));
}
else {
    console.log("O n\u00FAmero ".concat(numero, " \u00E9 \u00EDmpar."));
}
