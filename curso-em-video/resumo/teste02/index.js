

function consultar() {

    let data = new Date()
    let ano = data.getFullYear()

    let resp = document.getElementById('resp')
    let res = document.getElementById('res')
    let imagem = document.getElementById('foto')
    let sexo = document.getElementsByName('sexo')
    let num = document.getElementById('inum')
    
    let numero = Number(num.value)
    let total = ano - numero

    let genero = ''

    //res.innerHTML = `oi`

    if (numero == 0 || numero < 1900 || numero > ano ) {

        alert(`[ERRO!!!] Verificar o ano digitado`)

    } else if (total >= 0 && total < 18) {

        resp.innerHTML = `<strong>[NÃO AUTORIZADO!!!]</strong>`
        imagem.src = '../teste02/img/stop.png'
        document.getElementById('sessao01').style.background = 'rgba(247, 12, 12, 0.863)'


        if (sexo[0].checked) {

            genero = 'Homem'

        } else if (sexo[1].checked){

         genero = 'Mulher'

        } else {

            genero = ''
        }

        res.innerHTML = `${genero} com <p>${total}</p> anos.`
        
    } else {

        resp.innerHTML = `<strong>[AUTORIZADO!!!]</strong>`
        imagem.src = '../teste02/img/sinal-verde.png'
        document.getElementById('sessao01').style.background = 'aquamarine'

        if (sexo[0].checked) {

            genero = 'Homem'

        } else if(sexo[1].checked){

         genero = 'Mulher'

        } else {

            genero =''
        }

        res.innerHTML = `${genero} com <p>${total}</p> anos.`
    }

    
}