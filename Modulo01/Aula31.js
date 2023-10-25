const pessoa = {
    nome: "Alice",
    idade: 30,
    cidade: "Exemploville"
};

for (const propriedade in pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
}
