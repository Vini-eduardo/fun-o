//Vinícius Eduardo Correia.
//Crie uma função que receba 3 números como parâmetro e retorne o MENOR dentre eles.

console.clear();

const teclado = require(`prompt-sync`)();

let n1: number = parseInt(teclado(`Digite o primeiro número: `));
let n2: number = parseInt(teclado(`Digite o primeiro número: `));
let n3: number = parseInt(teclado(`Digite o primeiro número: `)); 
let res: number = 0;

function ordem (n1:number, n2:number, n3: number): number{
    if (n1 < n2 && n1 < n3) (res = n1)
    else if (n2 < n1 && n2 < n3) (res = n2)
    else if (n3 < n1 && n3 < n2)  (res = n3)
    else (`algo deu errado`);
    return res;
}
   let menornumero = ordem(n1,n2,n3) 
   console.log(`O menor número é ${menornumero}`);

