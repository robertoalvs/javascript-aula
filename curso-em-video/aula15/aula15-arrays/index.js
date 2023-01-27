

let num = [5,8,4] // Arrays Vetor, aqui temos o indice de == indice[0] com o valor 5 o indice [1] com o valor 8 e o indice [2[] com o valor 4]

num[3] = 6 // Acrescenta no indice [3] o valor 6
num.push(9)
num.push(7) // Acrescenta o valor 7 no array automaticamente, no indice [4]

num.length // O atributo length mostra o comprimento  

num.sort()

//num.sort() // Coloca os valores do array em ordem crescente
console.log(num)
let pos = num.indexOf(9)
console.log(`O valor 9 está na posição ${pos}`)
console.log(`Nosso vetor tem: ${num.length} posições`) 
// console.log(num[2]) // Mostra a posição do indice [2] 