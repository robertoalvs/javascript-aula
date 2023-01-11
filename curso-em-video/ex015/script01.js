

function verificar() {

    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){

        alert('[ERRO] Verifique os dados e tente novamente')

    } else {

        // alert('Tudo ok')
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)

        // res.innerHTML = `Idade calculada ${idade}` // esse comondo foi para testar

        let gênero = ''

        let img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (fsex[0].checked) {

            gênero = 'Homem'

        if (idade >=0 && idade <10) {

            img.setAttribute('src', '../ex015/img/crianca-homem.png')

        } else if (idade < 21) {

            img.setAttribute('src', '../ex015/img/homem-adulto.png')

        } else {

            img.setAttribute('src', '../ex015/img/homem-idoso.png')
        }
        

        } else if (fsex[1].checked) {

            gênero = 'Mulher'

            if (idade >=0 && idade <10) {

                img.setAttribute('src', '../ex015/img/crianca-mulher.png')
    
            } else if (idade < 21) {
    
                img.setAttribute('src', '../ex015/img/mulher-jovem.png')
    
            } else {
    
                img.setAttribute('src', '../ex015/img/mulher-idosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}