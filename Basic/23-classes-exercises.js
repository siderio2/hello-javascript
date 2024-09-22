/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.youtube.com/live/8p6SLAIgwZI?si=MS9o7qIhezx9NTQX&t=902
*/

// 1. Crea una clase que reciba dos propiedades

class Human {
  constructor(soul, body) {
    this.body = body
    this.soul = soul
  }

  static sleep() {
    console.log("zzz")
  }
}

// 2. Añade un método a la clase que utilice las propiedades

Human.prototype.born = function () {
  let personality = this.body + this.soul
  return personality
}

// 3. Muestra los valores de las propiedades e invoca a la función

let baby = new Human(89, 65)
console.log(
  "This baby has a " + baby.soul + " soul and " + baby.body + " body.",
)
let babyPersonality = baby.born()
console.log("It's personality is " + babyPersonality)

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático

Human.sleep()

// 6. Crea una clase que haga uso de herencia

class PoliceMan extends Human {
  constructor(soul, body, character) {
    super(soul, body)
    this.character = character
  }

  arrest() {
    console.log(" ha arrestado a alguien")
  }
}

let policeMan = new PoliceMan(89, 65, "Cabo")

console.log(
  `El policía es ${
    policeMan.character
  } y se tiene una personalidad de ${policeMan.born()} y además`,
)
policeMan.arrest()
// 7. Crea una clase que haga uso de getters y setters

class SecretClass {
  #secret1
  #secret2
  constructor(secret1, secret2) {
    this.#secret1 = secret1
    this.#secret2 = secret2
  }

  get secret1() {
    return this.#secret1
  }

  get secret2() {
    return this.#secret2
  }

  set secret1(secret) {
    this.#secret1 = secret
  }

  set secret2(secret) {
    this.#secret2 = secret
  }
}

let hidden = new SecretClass("secreto1", "secreto2")
console.log(hidden.secret1)
hidden.secret1 = "secreto3"
console.log(hidden.secret1)
hidden.secret2 = "secreto4"
console.log(hidden.secret2)

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia

class OldMan extends Human {
  static sleep() {
    console.log("grrrrrrrrr")
  }
}

OldMan.sleep()
