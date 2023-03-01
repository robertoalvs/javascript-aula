
function carregar() {

    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let txt = document.getElementById('txt')
    let data = new Date()
    let hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas `

    if (hora >=0 && hora < 12) {

        //BOM DIA

        img.src = '../aula12ex/img/tarde250.png'
        txt.innerHTML = `<strong>BOM DIA!!!</strong>`
        document.body.style.background = 'antiquewhite'

    }else if (hora >= 12 && hora <= 18) {

        //BOA TARDE
        img.src = '../aula12ex/img/manha250.png'
        txt.innerHTML = `<strong>BOA TARDE!!!</strong>`
        document.body.style.background = 'coral'
        

    }else {
        
        //BOA NOITE
        img.src = '../aula12ex/img/noite250.png'
        txt.innerHTML = `<strong>BOA NOITE!!!</strong>`
        document.body.style.background = 'rgba(3, 3, 51, 0.664)'
        
    }
}