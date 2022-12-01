
const num = Number (prompt('Digite o ano que vc nasceu:')); // Criou uma variável num. Temos que fazer uma conversão por que o PROMPT lê só string

const numTeste = document.getElementsById('idade'); // Criamos outra variável, numTeste, depois iremos utilizar o getElementsByClassName, por que criamos um class no html com name idade.

const texto = document.getElementById('texto');

numTeste.innerHTML = num;

texto.innerHTML = '';
texto.innerHTML += `<p> Sua idade - 2022 é: ${num - 2022}. </p> `;

