function contar() {

    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    
    let res = document.getElementById('res')
    let num = Number(ini.value)
    let num1 = Number(fim.value)
    let num2 = Number(passo.value)

    if (ini.value.length == 0 || fim.value.length || passo.value.length == 0 ) {

        res.innerHTML = 'IMPOSSÍVEL CONTAR:'



    }else {

        res.innerHTML += 'Contando:'

        if (num2 <= 0) {
            
            num2 = 1
            alert('Passo inválido! Considerando PASSO 1')
            

        }

        if (num < num1) {

            // Contagem Crescente
            for (let c = num; c <= num1; c += num2) {

                res.innerHTML += `${c} \u{1F449}`
            }

        }else {

            // Contagem regressiva
            for (let c = num; c >= num1; c -= num2) {

                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
        


        





}