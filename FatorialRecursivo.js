// Importa a biblioteca prompt-sync para entrada de dados
const prompt = require('prompt-sync')();

// Define a função fatorial de forma recursiva
function fatorial(n) {
    // Se n for negativo, lança um erro
    if (n < 0) {
        throw new Error('Fatorial não definido para números negativos');
    }
    // Caso base: fatorial de 0 é 1
    if (n === 0) {
        return 1;
    }
    // Passo recursivo: n! = n * (n-1)!
    return n * fatorial(n - 1);
}

// Solicita ao usuário um número
const numero = parseInt(prompt('Digite um número para calcular o fatorial: '));

// Bloco try-catch para tratar possíveis erros
try {
    const resultado = fatorial(numero);
    console.log(`O fatorial de ${numero} é: ${resultado}`);
} catch (error) {
    // Exibe o erro, se houver
    console.error(error.message);
}
