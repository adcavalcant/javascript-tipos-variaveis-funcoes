// tipo Number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const soma = primeiroNumero + segundoNumero;
const subtracao = primeiroNumero - segundoNumero;
const multiplicacao = primeiroNumero * segundoNumero;
const divisao = primeiroNumero / segundoNumero;
const resto = primeiroNumero % segundoNumero;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(resto);

// ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = 0.3;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao);

//NaN -> Not a Number (Não é número)

const alura = "Alura";
console.log(alura * primeiroNumero);
