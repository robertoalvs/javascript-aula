
function contar() {

    let inicio = document.getElementById('inum')
    let fim = document.getElementById('inumm')
    let passo = document.getElementById('inuum')
    let res = document.getElementById('res')

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

        alert('[ERRO!!!] Campo faltando número' )


    } else {

        res.innerHTML = 'Contando: <br>'

        if (i < f) {

            for (let c = 1; c <= f; c += p) {

                res.innerHTML += `${c} \u{1F449}`

            }
            


        } else {

                for (let c = i; c >= f; c -= p) {

                    res.innerHTML += `${c} \u{1F449}`
                }  
            
        }

        res.innerHTML += `\u{1F603}`
    }
     
}