// Exibe a data e hora atual
console.log(new Date());
// Exibe a data e hora de referência do JS. Considera o fuso horário
console.log(new Date(0));
// Exibe o número de milissegundos
console.log(new Date().getTime());

// Define uma data com ano, mês e dia
console.log(new Date(2024, 6, 3));

// Define o ano, mês, dia, hora, minuto e segundo
console.log(new Date(2024, 6, 3, 14, 30, 0));

// Métodos para trabalhar com data e hora
let myDate = new Date();

console.log(myDate.getDay());
console.log(myDate.getDate());
console.log(myDate.getMonth());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());

// Modificando uma data e uma hora
let inDate = new Date();

// Modificando o ano
inDate.setFullYear(2030);

console.log(inDate);
