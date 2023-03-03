
function verificar() {

    let data = new Date()
    let ano = data.getFullYear() // ano atual

    let nasc = document.getElementById('inasc')
    let res = document.getElementById('res')
    let num = Number(nasc.value) // convertendo em número
    let idade = ano - num // valor do ano atual - a valor digitado pelo usuário
    let radio = document.getElementsByName('sex') // name do input radio

    let img = document.createElement('img') // Cria a TAG img
    img.setAttribute('id', 'fotos') // Dá um Id para a tag img(FOTOS)

    let genero = ''


    if (nasc.value.length == 0 || nasc.value > ano) {

        alert('ERRO! Verifique o Ano Digitado')

    }else if (radio[0].checked) {

        genero ='Homem'

        if(idade >=0 && idade < 10) {

            img.setAttribute('src', '../verificador-de-idade/img/crianca-homem.png') 

        }else if (idade < 21) {

            img.setAttribute('src', '../verificador-de-idade/img/homem-jovem.png')

        }else if(idade < 50){

            img.setAttribute('src', '../verificador-de-idade/img/homem-adulto.png')


        }else {

            img.setAttribute('src', '../verificador-de-idade/img/homem-idoso.png')
        }
    


    }else if (radio[1].checked) {

        genero = 'Mulher'

        if(idade >=0 && idade < 10) {

            img.setAttribute('src', '../verificador-de-idade/img/crianca-mulher.png') 

        }else if (idade < 21) {

            img.setAttribute('src', '../verificador-de-idade/img/mulher-jovem.png')

        }else if(idade < 50){

            img.setAttribute('src', '../verificador-de-idade/img/mulher-adulta.png')


        }else {

            img.setAttribute('src', '../verificador-de-idade/img/mulher-idosa.png')
        }

    }
    res.innerHTML = `Detectamos um ${genero} com ${idade} anos`
    res.appendChild(img) // adiciona o elemento img, assim a foto vai aparecer
    

    
    
}