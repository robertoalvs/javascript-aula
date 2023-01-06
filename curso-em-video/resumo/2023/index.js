

function verificar() {

    let nome = document.getElementById('iname')
    let sobrenome = document.getElementById('isobre')

    let div = document.getElementById('res')

    let ano = document.getElementById('iano')
    let nasci = document.getElementById('inasci')

    let num1 = Number(ano.value)
    let num2 = Number(nasci.value)

    let nome1 = (nome.value)
    let sobrenome1 = (sobrenome.value)

    let idade = (num1 - num2)

    div.innerHTML = `<p> Nome: <strong>${nome1}</strong> </p>`
    div.innerHTML += `<p> Sobrenome: <strong>${sobrenome1}</strong> <p>`
    div.innerHTML += `<p> Ano Atual: <strong>${num1}</strong> <p>`
    div.innerHTML += `<p> Nascimento: <strong>${num2}</strong> <p>`
    
   // div.innerHTML += `<p> Sua idade é: <strong>${idade}</strong> <p>`

        if (idade < 18) {

            div.innerHTML += `<p> Sua idade é: <strong> ${idade}</strong> VOCÊ NÃO PODE FAZER O ENXAME!!!<p>`

        }

        else {

            div.innerHTML += `<p> Sua idade é: <strong>${idade}</strong> PARABÉNS VOCÊ ESTÁ HABILITADO PARA FAZER A PROVA!!!<p>`
        }
}