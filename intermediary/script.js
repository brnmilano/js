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
