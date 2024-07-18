// Strings

// Concatenación
let myName = "Brais"
let greeting = "Hola, " + myName + "!"

console.log(greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[11])
console.log(greeting[12])

// Métodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Brais")) // 0
console.log(greeting.includes("Hola")) // true
console.log(greeting.includes("Brais")) // true
console.log(greeting.includes("Mouredev")) // false
console.log(greeting.slice("0, 5")) // Desde donde empieza y hasta donde termina
console.log(greeting.replace("Brais", "Mouredev")) // Reemplazar texto

// Template literals
let message = `Hola, este
es JavaScript`

console.log(message)

let email = "brais"
console.log(`Hola, ${myName}! Tu correo es ${email}@moure.dev`)

// String interpolation
let message2 = `Hola, ${myName}! Tu correo es ${email}@moure.dev`

console.log(message2)

// String methods
let message3 = "Hola, este es JavaScript"
console.log(message3.split(" "))

let message4 = "Hola, este es JavaScript"
console.log(message4.split(", "))

let message5 = "Hola, este es JavaScript" // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
console.log(message5.split("", 10))

let message6 = "Hola, este es JavaScript"
console.log(message6.split(""))

let message7 = "Hola, este es JavaScript"
console.log(message7.split())

// String properties
let message8 = "Hola, este es JavaScript"
console.log(message8.length)

let message9 = "Hola, este es JavaScript" // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
console.log(message9.charCodeAt(1))
