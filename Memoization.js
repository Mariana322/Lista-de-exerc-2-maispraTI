const prompt = require('prompt-sync')({ sigint: true });

// Função memoize recebe uma função 'fn'
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.hasOwnProperty(key)) {
            console.log('Resultado do cache para', key);
            return cache[key];
        }
        const result = fn.apply(this, args);
        cache[key] = result;
        console.log('Novo cálculo para', key);
        return result;
    };
}

// Função fatorial recursiva
function fatorial(n) {
    if (n < 0) throw new Error('Fatorial não definido para negativos');
    if (n === 0) return 1;
    return n * fatorial(n - 1);
}

const fatorialMemo = memoize(fatorial);

while (true) {
    let entrada = prompt('Digite um número para calcular fatorial (ou "sair" para encerrar): ');
    if (entrada.toLowerCase() === 'sair') break;

    let num = parseInt(entrada);
    if (isNaN(num)) {
        console.log('Por favor, digite um número válido.');
        continue;
    }

    try {
        let resultado = fatorialMemo(num);
        console.log(`Fatorial de ${num} é ${resultado}`);
    } catch (e) {
        console.log(e.message);
    }
}
