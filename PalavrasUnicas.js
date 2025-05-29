// Importa a biblioteca prompt-sync para permitir entrada de dados pelo usuário
const prompt = require('prompt-sync')();

// Solicita ao usuário uma frase
const frase = prompt('Digite uma frase: ');

// Separa a frase em um array de palavras, usando espaço como separador
const palavras = frase.split(' ');

// Cria um array vazio para armazenar as palavras únicas
const unicas = [];

// Percorre todas as palavras da frase
for (let i = 0; i < palavras.length; i++) {
    // Armazena a palavra atual
    let palavra = palavras[i];

    // Verifica se a palavra ainda não está no array de palavras únicas
    if (!unicas.includes(palavra)) {
        // Se não estiver, adiciona ao array de palavras únicas
        unicas.push(palavra);
    }
    // Caso contrário, não faz nada (evita repetir)
}

// Exibe o array de palavras únicas
console.log('Palavras únicas:', unicas);
