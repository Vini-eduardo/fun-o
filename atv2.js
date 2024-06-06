//Vinícius Eduardo Correia.
//Crie uma função que receba 3 números como parâmetro e retorne o MENOR dentre eles.
console.clear();
var teclado = require("prompt-sync")();
var n1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
var n2 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
var n3 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
var res = 0;
function ordem(n1, n2, n3) {
    if (n1 < n2 && n1 < n3)
        (res = n1);
    else if (n2 < n1 && n2 < n3)
        (res = n2);
    else if (n3 < n1 && n3 < n2)
        (res = n3);
    else
        ("algo deu errado");
    return res;
}
var menornumero = ordem(n1, n2, n3);
console.log("O menor n\u00FAmero \u00E9 ".concat(menornumero));
