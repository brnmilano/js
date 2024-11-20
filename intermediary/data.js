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

// Convertendo uma data em uma string específica

let date1 = new Date((2024, 6, 3, 14, 30, 0));

console.log(date1.toString()); // converte para string
console.log(date1.toDateString()); // converte apenas a data em uma string
console.log(date1.toTimeString()); // converte apenas a hora em uma string

// Usando o toLocaleString()
console.log(
  date1.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })
);

// Conhecendo a Intl

// Obtem informações da localidade
const currentLocale = Intl.DateTimeFormat().resolvedOptions();
console.log(currentLocale);

// Exibe no formato de acordo com a localidade
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()));
console.log(new Intl.DateTimeFormat("en-US").format(new Date()));

// Obtem a diferença em minutos do timezone
console.log(date1.getTimezoneOffset());

// Obtem a diferença em horas do timezone
console.log(date1.getTimezoneOffset() / 60);
