

let num = [8, 1, 3, 4, 9]
num.sort()
num[5] = 10
// console.log(valores[0])




// Esse código abaixo tem o mesmo propósito, porém de forma simplificada.

/* for (let pos=0; pos < valores.length; pos++) {

    valores.sort()
    console.log(`A posição ${pos} tem o valor ${valores[pos]} `)
} */


for (let pos in num) { // Para cada posição dentro de num, ou para cada posição na variável composta eu vou mostrar o NUM[POS] ------ (in = em) ---- (for = para) 

    
   
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}