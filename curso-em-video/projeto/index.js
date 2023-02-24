
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

    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} Adicionado`
    lista.appendChild(item)

    }else {

        alert('Valor inválido ou já está na lista.')
    }
    num.value = '' // O input com a variável num, vai apagar o qeu o usuário digitou, depois de adicionar.

    num.focus() // Deixa o cursor piscando dentro da caixa do input, como se vc tivesse clicado, para digitar novamente.
}

function finalizar() { // botão finalizar

    if ( valores.length == 0) { // Se não for digitado nada na caixa

        alert('Adicione Valoeres antes de finalizar!')


    }else {

        let tot = valores.length // Variável para saber quantos elementos temos dentro do vetor 
        let maior = valores[0] // O maior número até o momento será o primeiro
        let menor = valores[0] // O menor número até o momento será o primeiro

        let soma = 0
        let media = 0

        for (let pos in valores) { // Para cada posição em in valores eu vou fazer um teste

            soma += valores[pos]

            if (valores[pos] > maior) { // Se os valores na posição pos, for maior do que o maior valor 
                maior = valores[pos]
            }

            if (valores[pos] < menor) { // Se os valores na posição pos, for menor do que o menor valor 

                menor = valores[pos]
            }

        }
        media = soma / tot
        res.innerHTML = '' // limpar a div resposta.
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>` // mostra a resposta da variável tot na tela
        res.innerHTML += `<p> O maior valor informado foi ${maior} </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor} </p>`
        res.innerHTML += `<p> Somando todos os valores temos ${soma}. </p>`
        res.innerHTML += `<p> A média dos Valores digitados é ${media}. </p>`
    }
}