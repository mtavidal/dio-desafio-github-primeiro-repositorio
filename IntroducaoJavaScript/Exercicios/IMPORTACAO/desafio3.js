const { gets, print } = require('./funcoes-auxiliares.js');

const n = parseInt(gets(10));

//TODO: Implemente um método que calcule o somatório de um número usando recursividade:

function somatorio(n){
   if (n == 0){
        return 0;
   } else{
    return n + somatorio(n-1);
   }
    
}

print(somatorio(n));