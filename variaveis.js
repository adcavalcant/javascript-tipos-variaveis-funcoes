//var
/* var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area; //podemos declarar a var depois de chamar ela... o node varre todo o código e primeiramente declara as vars..
 */

/* let forma = "retangulo";
let altura = 5;
let comprimento = 7;
let area; //só podemos utilizar o let declarando antes...

if (forma === "retangulo") {
  area = altura * comprimento;
} else {
  area = (altura * comprimento) / 2;
}

console.log(area); */

const forma = "quadrado";
const altura = 5;
const comprimento = 7;
let area;

if (forma == "quadrado") {
  area = altura * comprimento;
} else {
  area = (altura * comprimento) / 2;
}

console.log(area);
