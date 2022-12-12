
function aplicarDesconto(preco, desconto) {
    return (preco - ((desconto / 100) * preco));
}

function aplicarJuros(preco, juros) {
    return (preco + ((juros / 100) * preco));
}

/* debito (-10%) = 1
       dinheiro ou pix (-15%) = 2
       2x no cartão (sem desconto ou juros)= 3
       mais que 2X no cartão (+10%) = 4
    */

(function () {
    const preco = 100;
    const condicaoPagamento = 2;

    if (condicaoPagamento === 1) {
        console.log(aplicarDesconto(preco, 10));
    } else if (condicaoPagamento === 2) {
        console.log(aplicarDesconto(preco, 15));
    } else if (condicaoPagamento === 3) {
        console.log(preco);
    } else {
        console.log(aplicarJuros(preco, 10));
    }
})();


