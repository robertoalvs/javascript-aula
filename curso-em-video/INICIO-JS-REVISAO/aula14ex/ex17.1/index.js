function tabuada() {

    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    let n  = Number(num.value)
    let c = 1 // VARIÁVEL QUE COMEÇA COM 1 - EXEMPLO 1X1 - 5X1
    

    if (num.value.length == 0 ) {

        alert('Digite um número por favor')

    }else {


        tab.innerHTML = '' // LIMPA O SELECT, ASSIM NÃO FICANDO FICANDO UMA TABUADA DENTRO DA OUTRA

        while (c <= 10) {

            
            let item = document.createElement('option') // CRIA A TAG OPTION, COMO SE FOSSE NO HTML

            item.text = `${c} x ${n} = ${c*n}` // PARTE DE DENTRO DO OPTION

            tab.appendChild(item) // TAG SELECT - RECEBE A TAG OPTION DENTRO DELA - VAI MOSTRAR A TABUADA DENTRO DO OPTION

            c++ // 1 X 1 - 1 X 2 - ACRESCENTA SEMPRE UM 
        }
    }
}