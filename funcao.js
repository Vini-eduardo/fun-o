function tabUada(tabuada) {
    var cont = 0;
    while (cont < 11) {
        console.log("".concat(tabuada, " x ").concat(cont, " = ").concat(tabuada * cont));
        cont++;
    }
}
var teclado = require("prompt-sync")();
var tabuada = parseInt(teclado("Digite a tabuada desejada: "));
tabUada(tabuada);
