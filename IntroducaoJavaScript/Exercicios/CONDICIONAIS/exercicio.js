/*Faça um programa para calcular o valor de uma viagem
    você terá 5 variáveis:
    1 - Preço do etanol;
    2 - Preço da gasolina;
    3 - Tipo de combustível;
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em Km da viagem.
    Imprima no console o valor que será gasto para realizar a viagem.
    ps. o preço do combustível, a distância da viagem e o gasto médio do carro não vão mudar no programa.
*/

const precoAlcool = 5.79;
const precoGasolina = 6.66;
const kmPorLitro = 10;
const distanciaEmKm = 100;
const isGasolina = true;  

if (isGasolina){
    let totalGasto = (distanciaEmKm  / kmPorLitro) * precoGasolina;
    console.log(totalGasto.toFixed(2) + ' em gasolina');
} else {
    let totalGasto = (distanciaEmKm  / kmPorLitro) * precoAlcool;
    console.log(totalGasto.toFixed(2) + ' em alcool');
}




