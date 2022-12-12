const { gets, print } = require('./funcoes-auxiliares.js');

let maiorNumero = 0;

for (let i = 0; i < 5; i++) {
    const numero = gets();
    if (numero > maiorNumero) {
        maiorNumero = numero;
    }
}


print(maiorNumero);

