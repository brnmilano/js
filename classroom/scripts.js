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

const userName = "Bruno";

function message(username) {
  console.log(`Olá, ${username}`);
}

message(userName);

function sum(a, b) {
  console.log(a + b);
}

sum(10, 20);
sum(5, 10);
sum(2, 3);

showMessage("Teste");

function endLine() {
  console.log("---");
}

function showMessage(message) {
  console.log(message);

  endLine();
}

/**
 *
 * @param {String} user email.
 * @param {String} user password.
 * @returns {Number} user id.
 */
function signIn(email, password) {
  console.log(`Email: ${email}, Password: ${password}`);

  return 7;
}

signIn("exemple@test.com", "123456");

// Função anônima
const hello1 = function () {
  return "Hello";
};

console.log(hello1());

// ----------------------------

const hello2 = function (name) {
  return `Hello, ${name}`;
};

console.log(hello2("Bruno"));

// callback function
function execute(taskName, callback) {
  console.log(`Executando a tarefa ${taskName}`);

  callback();
}

const callback = () => {
  console.log("Tarefa executada com sucesso!");
};

execute("Tarefa 1", callback);
