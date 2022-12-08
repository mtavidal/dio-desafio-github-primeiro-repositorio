const nota1 = 7.5;
const nota2 = 7.5;
const nota3 = 6.5;
const media = (nota1 + nota2 + nota3) / 3;

if (media < 5.0) {
    console.log('O aluno obteve a média ' + media.toFixed(1) + ' e possui a classificação REPROVAÇÃO.');
} else if (media >= 5.0 && media <= 7) {
    console.log('O aluno obteve a média ' + media.toFixed(1) + ' e possui a classificação RECUPERAÇÃO.');
} else {
    console.log('O aluno obteve a média ' + media.toFixed(1) + ' e possui a classificação PASSOU DE SEMESTRE.');
}