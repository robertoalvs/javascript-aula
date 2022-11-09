// Não podemos criar CONSTANTES com palavras reservadas
// CONSTANTES precisam ter nomes significativos
// Não pode começar um nome de uma variável com número
// As CONSTANTES não pode conter espaços ou traços
// Utilizamos camelcase
// Case-sensitive
// Não podemos modificar o valor de uma constante.
// Não utilizar VAR, UTILIZE CONST.

// const nome = 'Roberto';
// nome = 'Wagner'; // NÃO PODEMOS TROCAR O VALOR DA CONSTANTE 

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
let resultadoTripolo = resultado * 3;
console.log(typeof primeiroNumero);