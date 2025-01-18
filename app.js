alert('Boas vindas ao jogo do número secreto');

let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

let chute;
let tentativas = 1;
console.log('valor do chute', chute);
console.log('Resultado da comparação:', chute == numeroSecreto);

while(numeroSecreto != chute){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if(numeroSecreto == chute)
    {
        break;
    }
    else
    {
        if(chute > numeroSecreto)
        {
            alert(`O número secreto é menor que ${chute}`);
        } else
        {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// if(tentativas > 1){
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
// }
// else 
// {
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa!`);
// }