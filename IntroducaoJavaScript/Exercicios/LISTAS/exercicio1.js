

function calcularTabuada (numero){
    console.log(`TABUADA DE ${numero}`)

    for (let i = 1; i <= 10; i++) {
    console.log(` - ${numero} * ${i} = ${numero*i}`);   
}
}

const numero = 6;
calcularTabuada(numero);


