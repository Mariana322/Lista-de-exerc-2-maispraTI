// Função memoize recebe uma função 'fn'
function memoize(fn) {
    // Cria um objeto para armazenar os resultados em cache
    const cache = {};

    // Retorna uma nova função
    return function(...args) {
        // Cria uma chave única baseada nos argumentos
        const key = JSON.stringify(args);

        // Se o resultado já estiver no cache, retorna ele
        if (cache.hasOwnProperty(key)) {
            console.log('Resultado do cache para', key);
            return cache[key];
        }

        // Caso contrário, chama a função original e armazena o resultado
        const result = fn.apply(this, args);
        cache[key] = result;

        console.log('Novo cálculo para', key);
        return result;
    };
}

// Exemplo de função pesada: fatorial
function fatorial(n) {
    if (n < 0) throw new Error('Fatorial não definido para negativos');
    if (n === 0) return 1;
    return n * fatorial(n - 1);
}

// Cria uma versão memoizada da função fatorial
const fatorialMemo = memoize(fatorial);

// Testes
console.log(fatorialMemo(5));  // Calcula
console.log(fatorialMemo(5));  // Recupera do cache
console.log(fatorialMemo(6));  // Calcula
