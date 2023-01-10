
let msg = document.getElementById('msg')
let img = document.getElementById('imagem')

let data = new Date()
let hora = data.getHours()
//let hora = 15

msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {

    // BOM DIA
    img.src = '../aula13/img/manha250.png'
    document.body.style.background = 'rgba(211, 173, 127, 0.678)'

} else if (hora >= 12 && hora < 18 ) {

    //BOA TARDE
    img.src = '../aula13/img/tarde250.png'
    document.body.style.background = 'rgba(255, 127, 80, 0.582)'

} else {

    //BOA NOITE
    img.src = '../aula13/img/noite250.png'
    document.body.style.background = 'rgba(0, 0, 139, 0.507)'
}