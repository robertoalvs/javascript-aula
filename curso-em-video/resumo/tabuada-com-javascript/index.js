

function tabuada() {


    let num = document.getElementById('inum')
    let tabu = document.getElementById('itabu')

    let n = Number(num.value)

    let c = 1

    if (num.value.length == 0) {

        alert('[ERRO!] Você precisa digitar um número.')


    } else {

        tabu.innerHTML = ''

        for ( let c = 1; c <= 10; c++ ) {

            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`

            tabu.appendChild(item)
        }
    }
}

