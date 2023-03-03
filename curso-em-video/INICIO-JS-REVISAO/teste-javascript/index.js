function carregar() {

    let hora = document.getElementById('hora')
    let img = document.getElementById('imagem')
    let diia = document.getElementById('diia')

    let data = new Date()
   let dia = data.getHours()

    hora.innerHTML = `Agora são <strong>${dia}</strong> horas`

    if (dia >= 0 && dia < 12) {

        //BOM DIA
        img.src = '../teste-javascript/img/tarde250.png'
        diia.innerHTML = 'BOM DIA!!!'
        document.body.style.background = 'rgb(245, 191, 110)'
       
    
    }else if (dia >=12 && dia <= 18) {

        img.src = '../teste-javascript/img/manha250.png'
        diia.innerHTML = 'BOA TARDE!!!'
        document.body.style.background = 'rgb(236, 209, 57)'

    }else {

        img.src = '../teste-javascript/img/noite250.png'
        diia.innerHTML = 'BOA NOITE!!!'
        document.body.style.background = 'rgba(5, 5, 168, 0.774)'
    }

}