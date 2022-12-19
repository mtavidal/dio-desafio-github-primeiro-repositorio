const { gets, print } = require('./funcoes-auxiliares.js');


let lines = gets('12').split("\n");
let n = parseInt(lines.shift());

let valor = 0;
let fatorial = 0;
let array = [];

while (n >= 3) {
    valor = parseInt(n * (n - 1) / (n - 2));
    n -= 3;

    if (array.length === 0) {
        array.push(valor);
    } else {
        array.push(valor * (-1)); 
    }                               

    array.push(n);
    n--;
}

if (n == 2) {
    valor = n * (n - 1);
    array.push(valor * (-1)); 
} else if (n == 1) {
    array.push(n * (-1)); 
}                                  

array.forEach (element => {
  fatorial += element;
});

print(fatorial);
