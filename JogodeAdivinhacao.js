// Importa a biblioteca prompt-sync para permitir a entrada de dados pelo usuário
const prompt = require('prompt-sync')();

// Gera um número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Inicializa a variável para contar as tentativas
let tentativas = 0;

// Variável para armazenar o palpite do usuário
let palpite;

// Inicia o loop while, que continuará até o usuário acertar o número
while (palpite !== numeroSecreto) {
    // Solicita ao usuário que informe um número
    palpite = parseInt(prompt('Adivinhe um número entre 1 e 100: '));

    // Incrementa a contagem de tentativas
    tentativas++;

    // Verifica se o palpite é menor que o número secreto
    if (palpite < numeroSecreto) {
        console.log('Quase! Informe um número mais alto!'); // Informa ao usuário que o número é maior
    }
    // Verifica se o palpite é maior que o número secreto
    else if (palpite > numeroSecreto) {
        console.log('Quase! Informe um número mais baixo!!'); // Informa ao usuário que o número é menor
    }
    // Se não for maior nem menor, significa que acertou
    else {
        console.log(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas.`);
    }
}
