
function checar() {

let res = document.getElementById('res')
let check = document.getElementsByName('box')

let checkbox = ''

    if(check[0].checked) {

        checkbox = 'Futebol' 

        res.innerHTML = `Seu esporte favorito é: <strong>${checkbox}</strong>`

    } else if (check[1].checked) {

        checkbox = 'Basquete'

        res.innerHTML = `Seu esporte favorito é: <strong>${checkbox}</strong>`

    } else if (check[2].checked) {

        checkbox = 'Tênis'

        res.innerHTML = `Seu esporte favorito é: <strong>${checkbox}</strong>`

    } else {

        alert('[ERRO!] Escolha uma opção.')
    }
    
    
}