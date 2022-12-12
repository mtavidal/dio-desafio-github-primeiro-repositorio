class Pessoa {
    nome;
    peso;
    altura;
    imc;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = this.calcularImc();
    }

    calcularImc () {
        return (this.peso / Math.pow(this.altura, 2)).toFixed(2); 
    }
    
    classificaImc (){
        if (this.imc < 18.5) {
            return 'ABAIXO DO PESO';
        } else if (this.imc >= 18.5 && this.imc < 25) {
            return 'PESO NORMAL';
        } else if (this.imc >= 25 && this.imc < 30) {
            return 'ACIMA DO PESO';
        } else if (this.imc >= 30 && this.imc < 40) {
            return 'OBESO';
        } else {
            return 'OBESIDADE GRAVE';
        }
    }
}

const p1 = new Pessoa('José', 120, 1.75);
console.log(p1.imc);
console.log(p1.classificaImc());
const p2 = new Pessoa('Manuela', 56, 1.61);
console.log(p2.imc);
console.log(p2.classificaImc());
