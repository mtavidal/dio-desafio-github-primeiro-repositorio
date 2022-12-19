const { gets, print } = require('./funcoes-auxiliares.js');

let lines = gets('10').split("\n"); 
let n = parseInt(lines.shift()); 
let raiz = [];

for (let i = n; i > 0; i--) {
    if (Number.isInteger(Math.sqrt(i)) ){
        raiz.push(i);
    } 
}



let cont = 0;
const dp = new Array(raiz.length).fill(0);
while(cont < raiz.length ) {
    let resto = n
    let contRaiz = cont 
    while(contRaiz <= raiz.length - 1 ){
        const element = raiz[contRaiz];
        if((resto - element) >= 0) {
            resto = resto - element
            dp[cont] += 1
        } else {
            contRaiz++
        }
    }
    cont++

}

print(Math.min(...dp));