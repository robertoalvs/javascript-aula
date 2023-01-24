
// Função tabuada() que foi criada na tag input buttom
function tabuada() {

    // variável num onde será guardada as informações digitadas pelo usuário digitada na tag input number, que tem o ID txtn
    let num = document.getElementById('txtn')

    // variável tab onde será gerada a tabuada que será mostrada na tag select, que tem o ID seltab
    let tab = document.getElementById('seltab')

    // variável n = que será guardada a conversão da string num para número
    let n = Number(num.value)

    // variável c que tem o valor de 1, onde começa a tabuada, que vai de 1 até 10
    let c = 1

    if (num.value.length == 0) { // Se não for digitado nada na caixa, será mostrado o alerta de erro.

        alert('[ERRO!] Por favor, digite um número!')


    } else {

        tab.innerHTML = '' // Limpa o select, assim não deixando uma tabuada em cima da outra.

        while (c <= 10 ) { // Enquanto o contado for maior ou igual a 10

            let item = document.createElement('option') // criando elementos dentro do select que no caso o 'option'

            item.text = `${n} x ${c} = ${n*c}` // item.text = É a parte de dentro do select. Obs: ${} x ${} = ${}  ===== Um número vezes um número, igual a multiplicação, que no caso seria ------- a variável n x c = n*c

            item.value = `tab${c}` // Esse codigo mostra o item que foi selecionado, na tag select 'option'

            tab.appendChild (item) // ele adiciona um elemento filho a variável item. que no caso a tag 'option'

            c++ // valor de c mais 1
        }
    }
}