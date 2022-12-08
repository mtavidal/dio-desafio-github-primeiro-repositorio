const peso = 150;
const altura = 1.65;
const imc = peso / Math.pow(altura, 2);

console.log(imc.toFixed(1));

if (imc < 18.5) {
    console.log('ABAIXO DO PESO');
} else if (imc >= 18.5 && imc < 25) {
    console.log('PESO NORMAL');
} else if (imc >= 25 && imc < 30) {
    console.log('ACIMA DO PESO');
} else if (imc >= 30 && imc < 40) {
    console.log('OBESO');
} else {
    console.log('OBESIDADE GRAVE');
}