

let valores = [8, 1, 3, 4, 9]


// console.log(valores[0])




// Esse código abaixo tem o mesmo propósito, porém de forma simplificada.

/* for (let pos=0; pos < valores.length; pos++) {

    valores.sort()
    console.log(`A posição ${pos} tem o valor ${valores[pos]} `)
} */


for (let pos in valores) { // Para cada posição dentro (em)  num

    
    valores.sort()
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}