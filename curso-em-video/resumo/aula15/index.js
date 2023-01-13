
function verificar() {

    let data = new Date()
    let ano = data.getFullYear()
    let img = document.getElementById('foto')
    let input = document.getElementById('inum')
    let res = document.getElementById('res')
    let ress = document.getElementById('resp')
    let num = Number(input.value)
    let resposta = ano - num
    let sexo = document.getElementsByName('radiosex')

    let gênero = ''

    //res.innerHTML = `Sua idade é: ${resposta} [REPROVADO!]`

    if (num == 0 || num > ano) {
        
        window.alert('[ERRO!] Verifique o ano digitado.')
        //res.innerHTML = `Sua idade é: ${resposta} [REPROVADO!]`
        //img.src = '../aula15/img/stop.png'
        //document.getElementById('sec').style.background = 'red'
        

    } else if (resposta >= 0 && resposta < 18) {

        res.innerHTML = `[REPROVADO!]`
        img.src = '../aula15/img/stop.png'
        document.getElementById('sec').style.background = 'red'


        if (sexo[0].checked) {

            gênero = 'Homem'
        } else if (sexo[1].checked) {

            gênero = 'Mulher'
        }

        ress.innerHTML = `${gênero} com ${resposta} anos.`

    } else {

        res.innerHTML = `[APROVADO!]`
        img.src = '../aula15/img/sinal-verde.png'
        document.getElementById('sec').style.background = 'green'

       // document.body.style.background = 'linear-gradient(to left, rgba(52, 196, 52, 0.534), rgba(226, 226, 28, 0.651) )'

        if (sexo[0].checked) {

            gênero = 'Homem'
        } else if (sexo[1].checked) {

            gênero = 'Mulher'
        }

        ress.innerHTML = `${gênero} com ${resposta} anos.`

    }
}
