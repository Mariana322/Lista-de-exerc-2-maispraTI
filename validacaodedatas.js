// Importa o prompt-sync para permitir entrada de dados no terminal
const prompt = require('prompt-sync')(); 

// Função que verifica se uma data (dia, mês, ano) é válida
function ehDataValida(dia, mes, ano) {
    // Cria uma data com os valores informados
    const data = new Date(ano, mes - 1, dia);

    // Verifica se a data criada corresponde exatamente ao que foi informado
    return (
        data.getFullYear() === ano &&
        data.getMonth() === mes - 1 &&
        data.getDate() === dia
    );
}

// Solicita ao usuário o dia, mês e ano
const dia = Number(prompt("Dia: "));
const mes = Number(prompt("Mês: "));
const ano = Number(prompt("Ano: "));

// Faz a validação da data
if (ehDataValida(dia, mes, ano)) {
    console.log(`${dia}/${mes}/${ano} é uma data VÁLIDA`);
} else {
    console.log(`${dia}/${mes}/${ano} é uma data INVÁLIDA`);
}
