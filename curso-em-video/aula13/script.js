

function carregar() {

let msg = document.getElementById('msg')
let img = document.getElementById('imagem')

let data = new Date()
let hora = data.getHours()


msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {

    //BOM DIA!
    img.src = '../aula13/img/manha250.png'
    document.body.style.background = 'rgba(196, 181, 160, 0.87)'

} else if (hora >= 12 && hora < 18) {

    //BOA TARDE!
    img.src = '../aula13/img/tarde250.png'
    document.body.style.background ='rgba(255, 127, 80, 0.548)'

} else {

    //BOA NOITE!

    img.src = '../aula13/img/noite250.png'
    document.body.style.background = 'rgba(0, 0, 139, 0.76)'
}

}


