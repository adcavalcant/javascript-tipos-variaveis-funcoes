const nome = "Cavalcante";
const dtNasc = 1999;
const idade = new Date().getFullYear() - dtNasc;
const cidadeNasc = "Manaus";
const patentes = [
  "M.AR",
  "TBRIG",
  "MBRIG",
  "BRIG",
  "CEL",
  "TCEL",
  "MJ",
  "CAP",
  "1T",
  "2T",
  "SUB",
  "1S",
  "2S",
  "3S",
  "CB",
  "S1",
  "S2",
];

//concatenação normal
const apresentacao =
  "Meu nome é " +
  patentes[13] +
  " " +
  nome +
  ", tenho " +
  idade +
  " anos, nasci em " +
  cidadeNasc +
  ".";
console.log(apresentacao);

//template string
const apresentacaoTemplate = `Meu nome é ${patentes[13]} ${nome}, tenho ${idade} anos, nasci em ${cidadeNasc}.`;
console.log(apresentacaoTemplate);

//a saída dos 2 consoles é a mesma.
console.log(apresentacao === apresentacaoTemplate);
