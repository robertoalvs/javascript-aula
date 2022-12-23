
function verificado() {

    let ano = document.getElementById('inum')
    let nasci = document.getElementById('inum1')
    let div = document.getElementById('resposta')

    let input1 = Number(ano.value)
    let input2 = Number(nasci.value)

    let total = input1 - input2

    div.innerHTML = `<p> Sua idade é: <strong> ${total} </strong> </p>`

    if (total <= 17) {

        div.innerHTML += `<p> Você é Menor de idade <strong class"restrito"> 'ACESSO RESTRITO'!!! </strong> <p> `
        
        div.style.color = 'red'
    }

    else {

        div.innerHTML += `<p> Você é Maior de idade <strong> 'ACESSO LIBERADO'!!! </strong> <p> `

        div.style.color = 'blue'

    }
}