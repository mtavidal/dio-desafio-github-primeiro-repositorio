
function isMaiorIdade (idade){
    if (idade >= 18){
        console.log('Maior');
    } else {
        console.log('Menor')
    }
}

(function (){
    const idade = 17;
    isMaiorIdade(idade);
})();
