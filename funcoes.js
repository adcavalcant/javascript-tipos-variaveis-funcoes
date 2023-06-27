// 1) declara a função
//string
function imprimirTexto(texto) {
  console.log(texto);
}

// 2) executa a função (1 ou + vezes)
imprimirTexto("oi");
imprimirTexto("teste");
imprimirTexto("e ai");
imprimirTexto("outro texto");


// existem três formas de escrever funções

// 1) função normal
function fazerAlgumaCoisa(){

}
// 2) função anônima (sem nome)
const funcAnonima = function(){

}

// 3) arrow function
const arrowFunction = () => {}

// OBS: As funções podem ou não ter parâmetros/argumentos ..