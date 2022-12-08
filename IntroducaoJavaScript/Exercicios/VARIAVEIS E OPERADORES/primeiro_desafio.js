/*Faça um programa para calcular o valor de uma viagem
    você terá 3 variáveis:
    1 - Preço do combustivel;
    2 - Gasto médio de combustível do carro por KM;
    3 - Distância em Km da viagem.
    ps. o preço do combustível, a distância da viagem e o gasto médio do carro não vão mudar no programa.
*/

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaEmKm = 1580;

let totalGasto = (distanciaEmKm  / kmPorLitro) * precoCombustivel;

console.log(totalGasto.toFixed(2));

