
function verificar() {

    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('iano')
    let res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {

        alert('[ERRO] Verifique os dados e tente novamente!')

    } else {

        let sexo = document.getElementsByTagName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''

        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {

            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                // CRIANÇA

            } else if (idade < 21) {

                // JOVEM

            } else if (idade < 50) {

             // ADULTO

            } else {

                // IDOSO
            }

            
        } else if (sexo[1].checked) {

            genero = 'mulher'

            if (idade >= 0 && idade < 10) {
                // CRIANÇA

            } else if (idade < 21) {

                // JOVEM

            } else if (idade < 50) {

             // ADULTO

            } else {

                // IDOSO
            }
        }
        
        
    }
}