



function somar(){

    let tn1 = document.getElementById('num01') // num01 é o ID do input no html
    let tn2 = document.querySelector('input#num02') // num02 é o ID do input no html

    let res = document.getElementById('somaa') // somaa é o id criado na div

    let n1 = Number(tn1.value) // Essa variável n1, vai fazer a leitura do que foi digitado pelo usuário, na variável tn1

    let n2 = Number(tn2.value) // Essa variável n1, vai fazer a leitura do que foi digitado pelo usuário, na variável tn2

    let s = n1 + n2 // A variável s fará a soma de n1 + n2

    res.innerHTML = `A soma de ${n1} + ${n2} é = <strong>${s}</strong>` // Será exibido no navegador o resultado da soma de n1 + n2.
}


let inter = document.getElementById('somaa')
inter.addEventListener('mouseout', sair)

function sair(){
    
    inter.style.opacity = '0.2'
}