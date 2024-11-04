console.log(user);

var user = "John Doe";

// Hoisting
// var user
// console.log(user);

// Escopo global.
// Variáveis declaradas com var são elevadas para o topo do escopo.
// Variáveis declaradas com var são de escopo global ou de função.
var email = "john@email.com";
var teste = 123;

{
  // Escopo de bloco.
  console.log(email);
}

{
  var age = 18;
}

console.log(age);

// Conversão de tipos (type casting ou type conversion)
let value = "9"; // string
console.log(typeof Number(value)); // number

console.log("Soma: ", 10 + 10); // 20 - Usar tipos numéricos.
console.log("Concatenação", "10" + "10"); // 1010

// FALSY e TRUTHY

// FALSY
console.log(false ? "verdadeiro" : "falso"); // falso
console.log(0 ? "verdadeiro" : "falso"); // falso
console.log(-0 ? "verdadeiro" : "falso"); // falso
console.log("" ? "verdadeiro" : "falso"); // falso
console.log(null ? "verdadeiro" : "falso"); // falso
console.log(undefined ? "verdadeiro" : "falso"); // falso
console.log(NaN ? "verdadeiro" : "falso"); // falso

// TRUTHY
console.log(true ? "verdadeiro" : "falso"); // verdadeiro
console.log(1 ? "verdadeiro" : "falso"); // verdadeiro
console.log(-1 ? "verdadeiro" : "falso"); // verdadeiro
console.log("0" ? "verdadeiro" : "falso"); // verdadeiro
console.log(
  "                                                                                                                                                                                                                                                                                             "
    ? "verdadeiro"
    : "falso"
); // verdadeiro
console.log([] ? "verdadeiro" : "falso"); // verdadeiro
console.log({} ? "verdadeiro" : "falso"); // verdadeiro
console.log(function () {} ? "verdadeiro" : "falso"); // verdadeiro

try {
  console.log(result);
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Finally");
}
