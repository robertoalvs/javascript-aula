

function contar () {

    let ini = document.getElementById('iinicio') // Variável que guardar o ID (iinicio) localizado na tag input no html.

    let fim = document.getElementById('ifim') // Variável que guardar o ID (ifim) localizado na tag input no html
    let passo = document.getElementById('ipasso') // Variável que guardar o ID (ipasso) localizado na tag input no html.

    let res = document.getElementById('res') // Variável que guarda o ID (res) da tag div, no html.

    let i = Number(ini.value) // Convertendo a string da variável (ini) em Number - Número.
    let f = Number(fim.value) // Convertendo a string da variável (fim) em Number - Número.
    let p = Number(passo.value) // Convertendo a string da variável (passo) em Number - Número.


    // O script abaixo identifica se o usuário digitou alguma coisa na caixa, se não digitou nada, aparece o alerta [ERRO].
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

        alert('[ERRO!] Digite um Número.')



    } else {

        // Mostra a conta digitada pelo usuário, no caso a resposta.
        res.innerHTML = 'Contando: '


        if (i < f) { // Contagem crescente

            // (let c = 1)Quer dizer que o contador vai començar do início.  (c <= f)E quando, o contador for menor igual ao fim. (c += p)O contador vai receber ele mesmo mais o passo.
        for (let c = 1; c <= f; c += p) {


            // Resposta do contador
            res.innerHTML += `${c} \u{1F449}` // Entre crases podemos adicionar emojis no javascript usando o formato \u{1F603}

        }
                                

        } else {


            // (let c = 1) Começando do início; Enquanto o contador (c>= f) for maior igual a f, (c -= p) o contador vai perder o passo. 
            for (let c = i; c >= f; c -= p) { // Contagem Regressiva

                res.innerHTML += `${c} \u{1F449}`

            }

        }
                                // O += ele concatena 
        res.innerHTML                      +=                        `\u{1F3C1}`
    }
}