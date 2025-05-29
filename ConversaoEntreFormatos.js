const prompt = require('prompt-sync')({ sigint: true });

// Função que converte array de pares em objeto
function paresParaObjeto(pares) {
    const obj = {};
    for (let [chave, valor] of pares) {
        obj[chave] = valor;
    }
    return obj;
}

// Função que converte objeto em array de pares
function objetoParaPares(obj) {
    const pares = [];
    for (let chave in obj) {
        pares.push([chave, obj[chave]]);
    }
    return pares;
}

// Coletar dados com prompt-sync

console.log('1 - Converter pares para objeto');
console.log('2 - Converter objeto para pares');

const opcao = prompt('Escolha a opção (1 ou 2): ');

if (opcao === '1') {
    let pares = [];
    while (true) {
        const chave = prompt('Digite a chave (ou "sair" para encerrar): ');
        if (chave.toLowerCase() === 'sair') break;

        const valor = prompt('Digite o valor: ');
        pares.push([chave, valor]);
    }
    const obj = paresParaObjeto(pares);
    console.log('Objeto resultante:', obj);

} else if (opcao === '2') {
    let obj = {};
    while (true) {
        const chave = prompt('Digite a chave (ou "sair" para encerrar): ');
        if (chave.toLowerCase() === 'sair') break;

        const valor = prompt('Digite o valor: ');
        obj[chave] = valor;
    }
    const pares = objetoParaPares(obj);
    console.log('Array de pares resultante:', pares);

} else {
    console.log('Opção inválida!');
}
