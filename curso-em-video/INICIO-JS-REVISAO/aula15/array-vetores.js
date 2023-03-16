let num = [5, 8, 4]




 /* num.push(1)
num.sort() // Organiza deixando em ordem os números
num[3] = 6 // Acrescenta o valor 6 no indice 3
num[4] = 9

num.push(7) // Acrescenta um valor na última posição da chave

num.length = Mostra a tamanho do VETOR 

console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso Vetor tem ${num.length} Elementos`)

for ( let pos = 0; pos < num.length; pos++) {

    
} */

for (let pos in num) { // para cada POSIÇÃO(pos) em "dentro" (in) NUM 

    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}