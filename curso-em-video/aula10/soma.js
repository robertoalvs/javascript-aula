
function somar(){

    let tn1 = document.getElementById('num01') // ID
    let tn2 = document.querySelector('input#num02') // Selector também ID ou CLASS

    let res = document.getElementById('res')
    let n1 = Number(tn1.value) // Estou pedindo o valor de 'tn1' que está relacionado ao input de "id = num1" ================================ OBS: O VALOR DE UMA CAIXA DE 'INPUT é TEXTO'  = 'STRING' , POR TANTO TEMOS QUE CONVERTER EM NUMBER, COM 'Number'

    let n2 = Number(tn2.value) // Estou pedindo o valor de 'tn1' que está relacionado ao input de "id = num2"

    let soma = n1 + n2
    res.innerHTML = `A soma de ${n1} + ${n2} é: <strong>${soma}</strong>`


}