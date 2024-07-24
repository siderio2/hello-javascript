// array

// Declaración
let myArray = []
let myArray2 = new Array()

// Inicialización
myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "MoureDev", 37, true]
myArray2 = new Array("Brais", "Moure", "MoureDev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Brais"
myArray2[0] = "Moure"
myArray2[1] = "MoureDev"

console.log(myArray2)

myArray = []
myArray2[2] = "Brais"
// myArray2[0] = "Moure"
myArray2[1] = "MoureDev"

console.log(myArray2)

// métodos comunes

myArray = []
myArray.push("Brais")
myArray.push("Moure")
myArray.push("MoureDev")
myArray.push(37)

console.log(myArray)

myArray.pop() // elimina el último elemento y lo devuelve

console.log(myArray)

// shift y unshift

myArray.shift() // elimina el primer elemento y lo devuelve

console.log(myArray)

myArray.unshift("Brais", "Mouredev ") // agrega un elemento al principio

console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // altenativa

// slice

myArray = ["Brais", "Moure", "MoureDev", 37, true]
let myNewArray = myArray.slice(1, 3)

console.log(myNewArray);

// splice

myArray.splice(1, 3)