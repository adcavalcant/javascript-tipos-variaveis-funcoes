const empresas = [
  {
    nome: "Samsung",
    valorDeMercado: 50,
    CEO: "Kim Hyun Suk",
    anoDeCriacao: 1938,
  },
  {
    nome: "Microsoft",
    valorDeMercado: 415,
    CEO: "Satya Nadella",
    anoDeCriacao: 1975,
  },
  {
    nome: "Intel",
    valorDeMercado: 117,
    CEO: "Brian Krzanich",
    anoDeCriacao: 1968,
  },
  {
    nome: "Facebook",
    valorDeMercado: 383,
    CEO: "Mark Zuckerberg",
    anoDeCriacao: 2004,
  },
  { nome: "Spotify", valorDeMercado: 30, CEO: "Daniel Ek", anoDeCriacao: 2006 },
  { nome: "Apple", valorDeMercado: 845, CEO: "Tim Cook", anoDeCriacao: 1976 },
];

//Exibir:
//1) Empresas criadas depois dos anos 2000. (filter)
const a2000 = empresas.filter((el) => el.anoDeCriacao > 2000);
console.log(a2000);

//2) O nome de cada empresa e de seu CEO. (map)
const nomeCeo = empresas.map((el) => `Empresa: ${el.nome} | CEO: ${el.CEO}`);
console.log(nomeCeo);

//3) O valor de todas as empresas somadas. (reduce)
const valorTotal = empresas.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.valorDeMercado;
}, 0);
console.log(`Valor total das empresas: R$${valorTotal}`);
