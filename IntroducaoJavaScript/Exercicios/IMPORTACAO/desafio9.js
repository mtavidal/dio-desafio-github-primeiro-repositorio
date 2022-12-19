const { gets, print } = require('./funcoes-auxiliares.js');


let arr = gets('').split(''); 
//let arr = [1,0]

let arrOrdenadoPar = []; 
let arrOrdenadoImpar = []; 
let arrOrdenado = []; 



for (let i = arr.length; i >= 0; i--) {
    let element = arr[i];
    if (element % 2 === 0){
        arrOrdenadoPar.push(element)
    }
}

for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element % 2 !== 0){
        arrOrdenadoImpar.push(element)
    }
}

arrOrdenado = arrOrdenadoPar.concat(arrOrdenadoImpar);

print(arrOrdenado);
