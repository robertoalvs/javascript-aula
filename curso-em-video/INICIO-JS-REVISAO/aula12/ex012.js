
let agora = new Date()
let hora = agora.getHours()
//let hora = 11
let ano = agora.getFullYear()
console.log(`São exatamente ${hora} horas e estamos em ${ano}`)



if (hora < 12) {

    console.log('Bom dia')

}else if (hora <=18) {

    console.log('Boa tarde')

}else {

    console.log('Boa noite!')
}