// declaração de função
function minhaFuncao(param) {
  //bloco de código
}

minhaFuncao("param");

// expressão de função
const soma = function (num1, num2) {
  return num1 + num2;
};
console.log(soma(1, 2));

//diferença principal ????

console.log(apresentar());

function apresentar() {
  return "Olá";
}

console.log(soma2(1, 2)); // vai dar erro, porque a função soma2() ainda não foi declarada, abaixo estamos criando uma constante e atribuindo a função para ela...
const soma2 = function (num1, num2) {
  return 1 + 2;
};
