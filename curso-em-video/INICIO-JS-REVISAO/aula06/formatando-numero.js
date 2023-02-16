
let n1 = 1545.5

console.log(n1)

console.log(n1.toFixed(2)) // Colocamos 2 casas decimais ficando de 1545.5 para (1545.50)

console.log(n1.toFixed(2).replace('.' , ',')) // Aqui fazemos a troca do ponto para a virgula. ficando 1545,50

console.log(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})) // Localiza por parte do mundo e formata em REAL no caspo desse exemplo ficando R$ 1.545,50
