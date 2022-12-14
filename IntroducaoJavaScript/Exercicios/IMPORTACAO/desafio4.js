const { gets, print } = require('./funcoes-auxiliares.js');

const a = gets();
const b = gets();

//TODO: Imprima se os valores numéricos passados são iguais ou não.

function isEqual(a, b) {
    if (a === b) {
        return 'Sao iguais!';
    } else {
        return 'Nao sao iguais!';
    }
}

print(isEqual(a, b));