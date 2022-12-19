const { gets, print } = require('./funcoes-auxiliares.js');

let palavra = gets('condicao');
print(checaPalindromo(palavra));

function checaPalindromo (palavra){
    let palavraReverse = palavra.split('').reverse('').join('');
    if (palavra === palavraReverse){
        return "TRUE";
    } else {
        return "FALSE"
    }

}