// parâmetros x argumentos (mesma coisa)

// ordem dos parâmetros

function nomeIdade(nome, idade) {
  return `meu nome é ${nome} e tenho ${idade} anos.`;
}

console.log(nomeIdade("3S Cavalcante", 23));

//parâmetros de função
//2      //2
function soma(numero1, numero2) {
  return numero1 + numero2;
}

console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(-500, 60));

function multiplicar(numero1 = 2, numero2 = 3) {
  return numero1 * numero2;
}

const imprimir = console.log;
imprimir(multiplicar(soma(2, 3), 3));

//assume o valor padrão dos parâmetros, pois não estão sendo passados parâmetros para a função 'multiplicar'
imprimir(multiplicar());
