function tabuada(){


    let num = document.getElementById('inum')
    let tab = document.getElementById('itab')

    let n = Number(num.value)

    let c = 1


    if (num.value.length == 0) {

        alert('ERRO!!! Digite um número.')


    }else {

        tab.innerHTML = ''

        for ( c = 1; c <= 10; c++) {

            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
        
       /* while (c <= 10) {

            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        } */
    }
}