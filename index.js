const readlineSync = require('readline-sync');

// Entrada de dados
const peso = parseFloat(readlineSync.question('Digite seu peso em kg: '));
const altura = parseFloat(readlineSync.question('Digite sua altura em metros: '));

// Cálculo do IMC
const imc = peso / (altura * altura);

// Classificação do IMC
let classificacao;
if (imc < 18.5) {
  classificacao = 'Magreza';
} else if (imc >= 18.5 && imc < 24.9) {
  classificacao = 'Normal';
} else if (imc >= 24.9 && imc < 30) {
  classificacao = 'Sobrepeso';
} else {
  classificacao = 'Obesidade';
}

// Exibição do resultado
console.log(`Seu IMC é: ${imc.toFixed(2)}`);
console.log(`Classificação: ${classificacao}`);