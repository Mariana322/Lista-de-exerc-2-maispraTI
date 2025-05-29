// Função debounce recebe uma função 'fn' e um tempo de atraso 'delay'
function debounce(fn, delay) {
    // Variável para armazenar o identificador do timeout
    let timerId;

    // Retorna uma nova função
    return function(...args) {
        // Se existir um timeout pendente, limpa ele
        if (timerId) {
            clearTimeout(timerId);
        }

        // Define um novo timeout
        timerId = setTimeout(() => {
            // Após o delay, executa a função original com os argumentos corretos
            fn.apply(this, args);
        }, delay);
    };
}

// Exemplo de uso:

// Função que queremos proteger com debounce
function onResize() {
    console.log('Função executada após o delay!');
}

// Cria a função debounced com 1000 ms (1 segundo) de atraso
const debouncedResize = debounce(onResize, 1000);

// Simulando chamadas rápidas e repetidas
debouncedResize();
debouncedResize();
debouncedResize();

// Apenas a última chamada será executada após 1 segundo sem novas chamadas
