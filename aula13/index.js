

// Strings


/* let roberto = prompt('Digite seu Primeiro Nome');
let robertoS = prompt('digite seu segundo Nome');

const resultado = 'roberto, robertoS';

alert (roberto +  robertoS); */


/* function moveon() {

    let pergunta = confirm("Ready to move on?");
    if (pergunta) window.location = "https://google.com";
    
    setTimeout(moveon, 60000);
} */

const nome = prompt('Digite seu nome completo');
document.body.innerHTML += `Seu nome é: <strong>${nome}</strong> <br>`;
document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> <br>`;
document.body.innerHTML +=`A segunda letra do seu nome é: <strong>${nome[1]}</strong> <br>`;
document.body.innerHTML += `Qual o primerio índice da letra a no seu nome? <strong>${nome.indexOf('a')} </strong> <br>`;
document.body.innerHTML += `Qual o último índice da letra a no seu nome? <strong>${nome.lastIndexOf('a')} </strong> <br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.split(-3, nome.length)} </strong> <br>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()} </strong> <br>`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()} </strong> <br>`;


