
function verificar() {

    let data = new Date()
    let ano = data.getFullYear()
    let img = document.getElementById('foto')
    let input = document.getElementById('inum')
    let res = document.getElementById('res')
    
    let num = Number(input.value)

    let resposta = ano - num

    //res.innerHTML = `Sua idade é: ${resposta} [REPROVADO!]`

    if (resposta >= 0 && resposta < 18) {

        res.innerHTML = `Sua idade é: ${resposta} [REPROVADO!]`
        img.src = '../aula15/img/stop.png'
        
    } else {

        res.innerHTML = `Sua idade é: ${resposta} [APROVADO!]`
        img.src = '../aula15/img/sinal-verde.png'
        document.getElementById('sec').style.background = 'green'
    }
}
