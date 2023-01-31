
function contar() {

    let inicio = document.getElementById('inum')
    let fim = document.getElementById('inumm')
    let passo = document.getElementById('innum')

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

        alert('[ERRO!!!] Campo faltando número' )
    }
     
}