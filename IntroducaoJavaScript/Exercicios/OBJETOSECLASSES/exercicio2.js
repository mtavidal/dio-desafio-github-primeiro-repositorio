class Carro {
    marca;
    cor;
    autonomia;

    constructor(marca, cor, autonomia){
        this.marca = marca;
        this.cor = cor;
        this.autonomia = autonomia;
    }
    
    calculoGastoNaViagem (distancia, preco){
        return distancia * this.autonomia * preco; 
    }
}


const carro1 = new Carro ('volks', 'amarelo', 1/7);
const carro2 = new Carro ('fiat', 'verde', 1/12);
console.log(carro1.calculoGastoNaViagem(70,5));
console.log(carro2.calculoGastoNaViagem(70,5));



