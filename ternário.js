const idadeMinima = 18;
const idadeCliente1 = 16;
const idadeCliente2 = 23;

// if normal
if (idadeCliente1 >= idadeMinima) {
  console.log("cerveja");
} else {
  console.log("suco");
}

// operador ternário (=?:)

                            //condicao          //true      //false
const ehMaior = idadeCliente2 >= idadeMinima ? "cerveja" : "suco";

console.log(ehMaior);
