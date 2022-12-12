
function calculoImc (peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificaImc (imc){
    if (imc < 18.5) {
        return 'ABAIXO DO PESO';
    } else if (imc >= 18.5 && imc < 25) {
        return 'PESO NORMAL';
    } else if (imc >= 25 && imc < 30) {
        return 'ACIMA DO PESO';
    } else if (imc >= 30 && imc < 40) {
        return 'OBESO';
    } else {
        return 'OBESIDADE GRAVE';
    }
}
//main
(function (){
    const peso = 100;
    const altura = 1.65;
    const imc = calculoImc(peso, altura);
    
    console.log(imc.toFixed(1)); 
    console.log(classificaImc(imc));
})();