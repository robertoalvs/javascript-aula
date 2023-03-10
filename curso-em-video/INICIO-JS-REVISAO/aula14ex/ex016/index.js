function contar() {

    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    let num1 = Number(ini.value)
    let num2 = Number(fim.value)
    let num3 = Number(passo.value)

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

        alert('ERRO! Digite um Número!')

    } else {

       res.innerHTML = 'Contando... <br>'
        if ( num3 <= 0) {

            alert('Passo inválido! Considerando PASSO 1')
            num3 =1
        }

       if ( num1 < num2) {

        for (let c = num1; c <= num2; c += num3) {

            res.innerHTML += `${c} \u{1F449}`
           }
    
       }else {

        for (let c = num1; c >= num2; c -= num3 ) {

            res.innerHTML += `${c} \u{1F449}`
         }
          
       }
        res.innerHTML += `\u{1F3C1}`
       
       
    }
}