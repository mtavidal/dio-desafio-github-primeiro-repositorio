const { gets, print } = require('./funcoes-auxiliares.js');


const numero = parseInt(gets(3));
const limite = parseInt(gets(18));

//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".

if (limite % numero === 0) {
    const divisao = limite / numero;
    let somaMultiplos = 0;
    for (let i = 1; i <= divisao; i++) {
        let multiplo = (numero * i);
        somaMultiplos += multiplo;
    }
    print(somaMultiplos)
} else {
    print(" O número " + limite + " não é múltiplo de " + numero);
}


