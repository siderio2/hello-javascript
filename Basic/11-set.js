//set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Brais", "Moure", "MoureDev", 37, true])

console.log(mySet)

// Metodos comunes

// add - agrega un elemento
// delete - elimina un elemento
// has - comprueba si un elemento existe
// clear - elimina todos los elementos

mySet.add("moure.dev")

console.log(mySet)

mySet.delete("moure.dev")

console.log(mySet)

mySet.has("moure.dev")

// size - devuelve la longitud del set

console.log(mySet.size)