/* Roberto dos Santos Alves tem 40 anos, pesa 84 kg
tem 1.80 de altura e seu IMC é de 25.925925925925924
Roberto Alves nasceu em 1981
*/

const nome = 'Roberto';
const sobrenome = 'dos Santos Alves';
const idade = 41;
const peso = 84;
const alturaEmM = 1.80;
let imc;
let anoNascimento;

imc = peso / (alturaEmM *alturaEmM);
anoNascimento = 2022 - idade;

 // console.log(anoNascimento);
 // console.log(anoNascimento);



 // TEMPLATE STRINGS
 console.log(`${nome} ${sobrenome}`);
 console.log(`tem ${idade}  anos, pesa ${peso}KG, tem ${alturaEmM} de altura, e seu IMC é de ${imc}`);
 