// Criando uma classe com um método construtor

class Person {
  constructor(name) {
    console.log(`Olá ${name}`);
  }
}

//Criando uma classe com um método construtor
const person = new Person("Bruno");

class Product {
  constructor(name) {
    this.name = name;
  }
}

const product1 = new Product("Teclado");
console.log(product1.name);

const product2 = new Product("Mouse");
console.log(product2.name);

// Adicionando métodos nas classes

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  sendEmail() {
    console.log(`Email enviado para ${this.name}, com email ${this.email}`);
  }
}

const user1 = new User("Bruno", "teste@teste.com");
user1.sendEmail();

// O que é método estático?

class NewUser {
  static showMessage(message) {
    console.log(message);
  }
}

NewUser.showMessage(`Essa é uma mensagem`);

// Como aplicar herança com classes?

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeNoise() {
    console.log(`Algum som de genérico do Animal`);
  }
}

// Sobrescrevendo métodos
class Dog extends Animal {
  makeNoise() {
    console.log(`${this.name} Latiu! Auuu auuu`);
  }
}

const dog = new Dog(`Bilu`);
console.log(dog.name);
dog.makeNoise();

// Sobrescrevendo métodos
class Cat extends Animal {
  makeNoise() {
    console.log(`${this.name} Miou! Miaaaau`);
  }
}

const cat = new Cat(`Mel`);
console.log(cat.name);
cat.makeNoise();

// Criando um objeto prototype
const address = {
  city: "São Paulo",
  country: "Brazil",
};

console.log(address);

// Como utilizar classes pra lidar com exceções
const obj = [];

try {
  obj.execute();
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Método indisponível.");
  }
}
