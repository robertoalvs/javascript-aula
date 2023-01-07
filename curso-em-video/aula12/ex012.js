/* let hora = 11

/* console.log(`Agora são exatamente ${hora} horas.`)

/* if (hora < 12){

    console.log('Bom dia')
} 
/* else if (hora <= 18) {

    console.log('Boa Tarde')
}

/* else {

    console.log('Boa noite')
} */



// ************************************************************

/* let agora = new Date()
let hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 12) {
    console.log('Bom dia')
}
else if (hora <= 18) {
    console.log('Boa tarde')
}
else {
    console.log ('Boa noite')
} */

let agora = new Date()
let dia = agora.getDay()

// dia = 7 // Aqui eu alterei a variável dia para 7. 

/*  0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

//console.log(dia)

switch (dia) {

    case 0:
        console.log('Domingo')
        break // O break é OBRIGÁTORIO 

    case 1:
        console.log('Segunda')
        break

    case 2:
        console.log('Terca')
        break

     case 3:
         console.log('Quarta')
         break
        
     case 4:
         console.log('Quinta')
         break

     case 5:
         console.log('Sexta')
        break

     case 6:
        console.log('Sábado')
        break 
        
    default: 
        console.log('[erro] dia inválido')
        break
}