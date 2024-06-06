// Vinícius Eduardo Correia
//Crie uma função que liste todos os números primos até 1000. Número primo é aquele que é divisível somente por 1 e por ele mesmo.
console.clear();
var tecla = require('prompt-sync')();
function listaNumerosPrimos() {
    function nPrimo(numero) {
        var i = 2;
        while (i < numero) {
            if (numero % i == 0) {
                return false;
            }
            i++;
        }
        return numero > 1;
    }
    var numeroPrimo = "0";
    var numero = 2;
    var primeiroPrimo = false;
    while (numero <= 1000) {
        if (nPrimo(numero)) {
            if (primeiroPrimo) {
                numeroPrimo += ", ";
            }
            else {
                primeiroPrimo = true;
            }
            numeroPrimo += numero;
        }
        numero++;
    }
    return numeroPrimo;
}
console.log(listaNumerosPrimos());
