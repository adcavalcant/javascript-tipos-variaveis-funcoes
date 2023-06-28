// arrow function

// exemplo 1: com apenas 1 linha
const soma = (n1, n2) => n1 + n2;

console.log(soma(1, 2));

//exemplo 2: com +1 linha
const multiplicacao = (n1 = 1, n2 = 3.5) => {
  const multiplicacao = n1 * n2;
  console.log(`Multiplicação = ${multiplicacao}`);
};

//passando parâmetros para função:
multiplicacao(2, 99);

//sem passar parâmetros (a função assumirá os valores padrões 1 e 3.5, respectivamente.)
multiplicacao();

//hoistigin: arrow function se comporta como expressão de função
//expressão -> const soma = function(n1,n2){return n1+n2;}
