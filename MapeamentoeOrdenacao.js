const prompt = require('prompt-sync')({ sigint: true });

// Função que recebe array de produtos e retorna nomes ordenados pelo preço
function nomesOrdenadosPorPreco(produtos) {
    const produtosOrdenados = produtos.slice().sort((a, b) => a.preco - b.preco);
    return produtosOrdenados.map(produto => produto.nome);
}

const produtos = [];
const quantidade = parseInt(prompt('Quantos produtos quer cadastrar? '), 10);

for (let i = 0; i < quantidade; i++) {
    const nome = prompt(`Nome do produto ${i + 1}: `);
    const preco = parseFloat(prompt(`Preço do produto ${i + 1}: `));
    produtos.push({ nome, preco });
}

const resultado = nomesOrdenadosPorPreco(produtos);
console.log('Nomes ordenados por preço:', resultado);
