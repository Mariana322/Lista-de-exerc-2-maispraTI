const prompt = require('prompt-sync')({ sigint: true });

let vendas = [];

while (true) {
    const cliente = prompt('Digite o nome do cliente (ou "sair" para encerrar): ');
    if (cliente.toLowerCase() === 'sair') break;

    const total = parseFloat(prompt('Digite o valor da venda: '));

    vendas.push({ cliente, total });
}

const agrupado = vendas.reduce((acc, venda) => {
    if (!acc[venda.cliente]) {
        acc[venda.cliente] = 0;
    }
    acc[venda.cliente] += venda.total;
    return acc;
}, {});

console.log('Resultado do agrupamento:');
console.log(agrupado);
