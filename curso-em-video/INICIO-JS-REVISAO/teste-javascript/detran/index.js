

function clicar() {

    let num = document.getElementById('inum')
    let num1 = document.getElementById('inum1')
    let img = document.getElementById('imagem')

    let n1 = Number(num.value)
    let n2 = Number(num1.value)

    let soma = n1 - n2

    let res = document.getElementById('res')
    let res1 = document.getElementById('res1')


    if (num.value.length == 0 && num1.value.length == 0) {
        alert('ERRO! DIGITE UM NÚMERO')


    }else if (num.value, num1.value <= 1899) {

        alert('ERRO! ANO INVÁLIDO!')
        //res.innerHTML = `SUA IDADE É ${soma}!`
        //res1.innerHTML = 'REPROVADO!'

    }else if (soma < 18){

        res.innerHTML = `SUA IDADE É ${soma}!`
        img.src = '../detran/img/stop.png'
        document.getElementById('sec').style.background = 'red'
        res1.innerHTML = 'REPROVADO!'
        

    }else if (soma >=65){

        res.innerHTML = `SUA IDADE É ${soma}!`
        img.src = '../detran/img/stop.png'
        document.getElementById('sec').style.background = 'red'
        res1.innerHTML = 'IDADE NÃO PERMITIDA'
        

    }else {

        res.innerHTML = `SUA IDADE É ${soma}!`
        img.src = '../detran/img/sinal-verde.png'
        document.getElementById('sec').style.background = 'green'
        res1.innerHTML = 'APROVADO!!!'
    } 


}