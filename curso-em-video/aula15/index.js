
function carregar() {

    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    //let hora = data.getHours()
    let hora = 15


    msg.innerHTML = `Agora são ${hora} horas`


    if (hora >= 0 && hora < 12) {

        // Bom dia!
        img.src = '../aula15/img/manha.png'
        document.body.style.background = 'rgba(233, 202, 164, 0.849)'

    } else if (hora >= 12 && hora < 18) {

        //Boa Tarde
        img.src = '../aula15/img/tarde.png'
        document.body.style.background = 'rgba(231, 110, 66, 0.795)'

    } else {

        // Boa noite
        img.src = '../aula15/img/noite.png'
        document.body.style.background = 'rgba(16, 16, 151, 0.719)'
    }
}

