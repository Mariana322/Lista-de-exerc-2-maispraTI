# Lista de Exercícios 2 - MaisPraTI

Este repositório contém a resolução de exercícios práticos de JavaScript, organizados por seções, abordando Estruturas de Controle, Funções, Recursão, Arrays e Objetos Complexos.

## 📋 Estrutura dos Exercícios

### **Seção 1: Estruturas de Controle Avançadas**

1. **Validação de Datas**  
Função `ehDataValida(dia, mes, ano)` que retorna `true` se os valores formarem uma data real (considerando meses com 28-31 dias e anos bissextos).

2. **Jogo de Adivinhação**  
Script que gera um número aleatório entre 1 e 100 e pede ao usuário para adivinhar. Informa "mais alto" ou "mais baixo" até acertar, contando o número de tentativas.

3. **Palavras Únicas**  
Dado uma string, extrai todas as palavras únicas usando `if/else` e `for`.

---

### **Seção 2: Funções e Recursão**

4. **Fatorial Recursivo**  
Função `fatorial(n)` de forma recursiva, tratando casos de `n < 0` com `Error` e `n === 0` retornando `1`.

5. **Debounce**  
Função `debounce(fn, delay)` que retorna uma nova função, executando `fn` apenas se não for chamada novamente dentro do intervalo `delay`.

6. **Memoization**  
Função `memoize(fn)` que armazena em cache chamadas anteriores, evitando recálculos desnecessários.

---

### **Seção 3: Arrays e Objetos Complexos**

7. **Mapeamento e Ordenação**  
Função que retorna um novo array apenas com os nomes de produtos, ordenados por preço crescente, utilizando `map` e `sort`.

8. **Agrupamento por Propriedade**  
Em um array de `vendas = [{ cliente, total }, ...]`, usa `reduce` para gerar um objeto com a soma total por cliente.

9. **Conversão Entre Formatos**  
- `paresParaObjeto(pares)`: converte um array de pares `[[chave, valor], ...]` para objeto.  
- `objetoParaPares(obj)`: faz o inverso, convertendo objeto para array de pares.

---

## ✅ Como Configurar e Executar Localmente

### 1. Pré-requisitos

- Node.js instalado: [Download Node.js](https://nodejs.org)
- Git instalado: [Download Git](https://git-scm.com)

---

### 2. Clonar o Repositório

git clone https://github.com/Mariana322/Lista-de-exerc-2-maispraTI.git
cd Lista-de-exerc-2-maispraTI

---

### 3. Instalar Dependências
Este projeto utiliza prompt-sync para entrada de dados. Instale com:

**npm install prompt-sync**

---

### 4. Executar os Exercícios
Cada exercício está em um arquivo separado com extensão .js. Para rodar, use:

**node NomeDoArquivo.js**

**Siga o mesmo padrão para os demais arquivos.**
