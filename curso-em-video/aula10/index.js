



let interacao = document.getElementById('texto'); // variável global, podemos fazer dentro da "function"

interacao.addEventListener('click', clicar)
interacao.addEventListener('mouseenter', entrar)
interacao.addEventListener('mouseout', sair)

        function clicar(){

            interacao.innerText = 'Roberto dos Santos Alves';

        }

        function entrar() {

            interacao.innerText = 'Entrou';
            interacao.style.background = 'red';
    
        }

        function sair() {

            interacao.innerText = 'Saiu!!!'
            interacao.style.background = 'green';
        }