const preco = 100;
const condicaoPagamento = 4;
/* debito = 1
   dinheiro ou pix = 2
   2x no cartão = 3
   mais que 2X no cartão = 4
*/

console.log('Total a pagar:')

if (condicaoPagamento === 1) {
    console.log(preco - ((10 / 100) * preco));
} else if (condicaoPagamento === 2) {
    console.log(preco - ((15 / 100) * preco));
} else if (condicaoPagamento === 3) {
    console.log(preco);
} else {
    console.log(preco + ((10 / 100) * preco));
}
