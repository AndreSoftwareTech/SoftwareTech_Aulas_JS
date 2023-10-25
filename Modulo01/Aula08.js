// Usando prompt() para receber o preço do produto
const preco = parseFloat(prompt("Digite o preço do produto:"));

// Exibindo a mensagem com formatação
const mensagem = `O preço do produto é $${preco.toFixed(2)}.`;
console.log(mensagem);
