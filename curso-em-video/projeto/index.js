
let num = document.querySelector('input#inum') // Variável para o input number.
let lista = document.querySelector('select#flista') // Variável para o select.
let res = document.querySelector('div#res') // // Variável para a div com a ID res

let valores = [] // Vetor valores




function isNumero(n) { // função que vai receber um número

    if (Number(n) >= 1 && Number(n) <= 100) {

        return true


    }else {

        return false
    }

}


function inLista(n, l) { // função que vai receber um número, e uma lista total de 2 parâmetros.

    if(l.indexOf(Number(n)) != -1) { // indexOf busca valores / (!= significa DIFERENTE)

        return true

    }else {

        return false
    }

}



function adicionar () {

    if ( isNumero(num.value) && !inLista(num.value, valores)) { // Aqui o (isNumero e inLista, ambos são nomes aleatórios, vc pode colocar qualquer nome) eles foram criados para analizar, se o que foi digitado, é um número, e só será adiciona se não estiver na lista(inlista).

    // Obs: O inlista vai passar o VALOR e a LISTA.

    alert('Tudo ok')

    }else {

        alert('Valor inválido ou já está na lista.')
    }
}