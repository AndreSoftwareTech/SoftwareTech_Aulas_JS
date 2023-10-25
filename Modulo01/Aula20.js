const numero1 = 5; // Representação binária: 101
const numero2 = 3; // Representação binária: 011

const andBitwise = numero1 & numero2; // E bit a bit (101 & 011 = 001)
const orBitwise = numero1 | numero2; // Ou bit a bit (101 | 011 = 111)
const xorBitwise = numero1 ^ numero2; // Ou exclusivo bit a bit (101 ^ 011 = 110)
const negacaoBitwise = ~numero1; // Negação bit a bit (~101 = 010)
const deslocamentoEsquerda = numero1 << 2; // Deslocamento para a esquerda (101 << 2 = 10100)
const deslocamentoDireita = numero1 >> 1; // Deslocamento para a direita (101 >> 1 = 10)
