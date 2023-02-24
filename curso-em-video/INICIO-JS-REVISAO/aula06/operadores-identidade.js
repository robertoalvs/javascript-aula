

let num = prompt('Digite sua nota')

let res = document.getElementById('res')

let media = 7


    res.innerHTML = `Sua media é ${num} <br> ${num > media?'<strong>APROVADO</strong>' : '<strong>REPROVADO</strong>'}`
