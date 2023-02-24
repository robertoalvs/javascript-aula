function tabuada() {


    let num = document.getElementById('inum')
    let tabu = document.getElementById('itabu')

    let n = Number(num.value)

    let c = 1

    if (num.value.length == 0) {

        alert('[ERRO!] Digite um Número')



    } else {

        tabu.innerText = ''
        
        for (let c = 1; c <= 10; c++) {


            let tag = document.createElement('option')
            tag.text = `${n} x ${c} = ${n*c}`

            tabu.appendChild(tag)
        } 


    }
}