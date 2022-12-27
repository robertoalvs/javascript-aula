function soma() {

    let velocidade = document.getElementById('inum')
    let div = document.getElementById('resultado')

    let veloc = Number(velocidade.value)
    
    let res = velocidade 
    
    div.innerHTML = `<p> Sua velocidade Atual é de: <strong> ${res} </strong> </p>`

}