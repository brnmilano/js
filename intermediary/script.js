/**
 * OBJETO:
 *  - Uma coleção de dados e/ou funcionalidades;
 *  - Podem ter propriedades e métodos;
 */

// Criando um objeto vazio
const obj = {};

console.log(obj);

// Criando um objeto com propriedades e métodos
const user = {
  email: "exemple@test.com",
  name: {
    firstName: "Bruno",
    lastName: "Milano",
  },
  address: {
    street: "Rua x",
    number: 23,
    city: "São Paulo",
    postalCode: "12345-123",
  },
  message: () => {
    console.log("Oi");
  },
};

console.log(user);
// tipo da variavel
console.log(typeof user);
// acessando propriedades de objetos
console.log(user.name.firstName);
// Executando o método do objeto
user.message();

// Acessando pela notação de colchetes
console.log(user["email"]);
console.log(user["name"]["firstName"]);
user["message"]();

const newUser = {
  name: "Bruno",
  message: function () {
    console.log(`Olá ${newUser.name}`);
    console.log(`Olá ${this.name}`);
  },
};

newUser.message();

// Atualizando um objeto
const product = {
  name: "Teclado",
  quantity: 90,
};

console.log(product.quantity);
product.quantity = 50;
console.log(product.quantity);

console.log(product.name);
product.name = "Mouse";
console.log(product.name);

/**
 * OPTIONAL CHAINING ( ? )
 *  - Encadeamento opcional
 *  - Se a propriedade ou função chamada é nullish (null ou undefined), a expressão
 *    retorna undefined em vez de gerar um erro.
 *
 *  - Útil ao explorar o conteúdo de um objeto quando não existe garantia de
 *    existência de determinadas propriedades obrigatórias.
 */

const userNew = {
  name: "Bruno",
  // address: {
  //   streed: "Avenida Brasil",
  //   city: "São Paulo",
  //   geo: {
  //     lat: 47.808,
  //     long: 13.3123,
  //   },
  // },
  message: function () {
    console.log(`Olá ${this.name}!`);
  },
};

console.log(userNew?.address?.street);
userNew.message?.();

// Função construtora
function createProduct(name) {
  const product = {};

  product.name = name;
  product.details = function () {
    console.log(`O nome do produto é ${this.name}`);
  };

  return product;
}

// Cria um novo objeto utilizando a estrutura da função construtora
const product1 = new createProduct("Teclado");
console.log(product1);
product1.details();

// Cria um novo objeto utilizando a estrutura da função construtora
const product2 = new createProduct("Mouse");
console.log(product2);
product2.details();

console.log(product1 === product2); // false - são objetos diferentes

// Exemplos de funções construtoras disponíveis diretamente no JavaScript

let myName = new String("Bruno");
console.log(myName);

let price = "50.5".replace(".", "");
console.log(price);

let date = new Date("2024-11-11");
console.log(date);

// Outra forma para criar uma função construtora
// O ideal aqui é usar o classes
function newPerson(name) {
  this.name = name;
  this.message = function () {
    console.log(`Olá ${this.name}`);
  };
}

const person1 = new newPerson("Bruno");
console.log(person1);

// Métodos de texto
// Texto maiúsculo e minúsculo

let message = "Estou estudando os fundamentos do JavaScript";
console.log(message);

// Exibir o texto em maiúsculo
console.log(message.toUpperCase());

// Exibir o texto em minúsculo
console.log(message.toLowerCase());

// Substituindo uma parte do texto
console.log(message.replace("JavaScript", "HTML"));

// Extraindo uma parte da string (start, end)
console.log(message.slice(0, 5));

// Extraindo uma parte da string de trás para frente
console.log(message.slice(-11));

let text = "      Texto exemplo.      ";
console.log(text.length);
console.log(text.trim().length);

// Comletando uma String
const creditCard = "1234567890123456"; // 16

// Pega os 4 últmos digitos
const lastDigits = creditCard.slice(-4);

// Substitui os 12 primeiros numeros por X
const maskedNumer = lastDigits.padStart(creditCard.length, "X");
console.log(maskedNumer);

// Substitui os ultimos por #
const number = "123";
console.log(number.padEnd(10, "#"));

// Encontrando um conteúdo no texto
// Em que posição uma palavra aparece
console.log(message.indexOf("estudando"));

// Criando Array com construtor
// [] - Array
// {} - Objeto
const newArray = new Array();
console.log(newArray); // - []

// Criando Array com posições definidas e disponíveís
const avaiable = new Array(10);

// Criando e acessando um array
const fruits = ["banana", "maça", "laranja"];
console.log(fruits); // mostra o array
console.log(fruits.length); // mostra o cumprimento do array
console.log(fruits[1]); // mostra o elemento "maça"
console.log(fruits[8]); // mostra undefined, essa posição não existe e/ou não está ocupada
console.log(fruits[fruits.length]); // retorna undefined, a lista tem o tamanho dela - 1
console.log(fruits[fruits.length - 1]); // mostra o elemento "laranja"

// Convertendo string para array
const userName = "Bruno Oliveira Milano";
console.log(userName.split()); // Cria um novo array com uma string e os nomes separados por espaço
console.log(Array.from(userName)); // Cria um novo array com cada letra da string original

// Adicionando e removendo itens do array
const users = [];

// Adicionando ao final do array
console.log(users.push("Bruno"));
console.log(users.push("Marcelo"));
console.log(users.push("Flávio"));
console.log(users);

// Adicionando ao inicio do array
console.log(users.unshift("José"));

// Remove o item do início do array
console.log(users.shift());

// Remove o item do final do array
console.log(users.pop());

// Usando o índice
const newFruits = ["Maça", "Melancia", "Banana"];

let position = newFruits.indexOf("Melancia ");

// Estruturas de repetição
// Loop While

let execute = true;

// while (execute) {
//   let response = window.prompt("Deseja continuar: 1 - SIM ou 2 - NÃO");

//   if (response === "2") {
//     execute = false;
//   }
// }

console.log("Segue o fluxo");

// Loop infinito
// Estrutura de repetição que não tem fim

// LOOP DO WHILE
let doWhileValue = 0;

do {
  doWhileValue++;

  console.log({ doWhileValue });
} while (doWhileValue < 10);

console.log("Segue o fluxo");

// LOOP FOR
// Iteração, voltas que o código dá
for (step = 0; step < 10; step++) {
  console.log(step);
}

let myNumber = 7;

for (step = 0; step <= 10; step++) {
  console.log(`${myNumber} x ${step} = ${myNumber * step}`);
}

// LOOP FOR IN

let person = {
  name: "Bruno",
  surname: "Milano",
  email: "este@test.com",
};

for (let property in person) {
  // exibe o nome da propriedade
  console.log(property);

  // exibe o conteudo da propriedade
  console.log(person[property]);
}

let students = ["Ana", "Flavio", "Bruno"];

for (let index in students) {
  // Exibe o indice do array
  console.log(index);

  // exibe cada item do array

  console.log(students[index]);
}

// LOOP FOR OF
// aqui percorremos e itera em cima dos valores, então precisa ser um objeto que pode ser percorrido
// O array é um objeto iteravel, possui posições para serem percorridas

for (let student of students) {
  // Apresenta o conteudo do array students
  console.log(student);
}

// Utilizando o BREAK para finalizar uma repetição

for (let index = 0; index < 10; index++) {
  if (index > 5) {
    break;
  }

  console.log({ index });
}

// CONTINUE
for (let continuar = 0; continuar < 10; continuar++) {
  // pula o 5, executa o continue, então de 4 pula para 6
  if (continuar === 5) {
    continue;
  }

  console.log({ continuar });
}
