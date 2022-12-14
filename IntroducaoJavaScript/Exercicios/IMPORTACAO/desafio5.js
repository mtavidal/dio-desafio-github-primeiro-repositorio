const { gets, print } = require('./funcoes-auxiliares.js');

const elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];

const valorBuscado = parseInt(gets(4));

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.

function buscaSequencial(valorBuscado) {
    for (let i = 0; i < elementos.length; i++) {
        const numero = elementos[i];
        if (numero === valorBuscado) {
            return 'Achei ' + valorBuscado + ' na posicao ' + i;
        }
    }
    return 'Numero ' + valorBuscado + ' nao encontrado!';
}

print(buscaSequencial(valorBuscado));