const { gets, print } = require('./funcoes-auxiliares.js');

const numero = gets(9);
print(fizzBuzz(numero));

//TODO: Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme o enunciado.

function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return 'FizzBuzz'
    } else if (numero % 3 === 0) {
        return 'Fizz'
    } else if (numero % 5 === 0) {
        return 'Buzz'
    } else if (!(numero % 3 === 0 && numero % 5 === 0)) {
        return numero
    }
}
