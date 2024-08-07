// Map: colección de pares clave-valor

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialización

myMap = new Map([
  ["name", "Brais"],
  ["email", "braismoure@mouredev.com"],
  ["age", 37]
])

console.log(myMap)

// Metodos y propiedades

// set

myMap.set("alias", "MoureDev")

console.log(myMap)

myMap.set("name", "Brais Moure")

console.log(myMap)

// get

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has

console.log(myMap.has("name"))
console.log(myMap.has("surname"))

// delete

myMap.delete("email")

console.log(myMap)

// clear  - elimina todos los elementos

myMap.clear()

console.log(myMap)

// keys
myMap = new Map([
  ["name", "Brais"],
  ["email", "braismoure@mouredev.com"],
  ["age", 37]
])

console.log(myMap.keys())

// values

console.log(myMap.values())

// entries

console.log(myMap.entries())

// size - devuelve la longitud del map

console.log(myMap.size)