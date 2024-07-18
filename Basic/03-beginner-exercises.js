/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Escribe un comentario en una línea
// Como este

// 2. Escribe un comentario en varias líneas
/*
* Como este otro
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let myName = "Brais Moure" // String
let age = 37 // Number
let isTeacher = true // Boolean
let undefinedValue // Undefined
let nullValue = null // Null
let mySymbol = Symbol("mysymbol") // Symbol
let myBigInt = 9879887765765878987656789876789876n // BigInt

// 4. Imprime por consola el valor de todas las variables

console.log(myName)
console.log(age)
console.log(isTeacher)
console.log(undefinedValue)
console.log(nullValue)
console.log(mySymbol)
console.log(myBigInt)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof myName)
console.log(typeof age)
console.log(typeof isTeacher)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myName = "MoureDev"
age = 38
isTeacher = false
mySymbol = Symbol("mysymbol2")
myBigInt = 9879887765765878987656789876789877n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myName = 38
age = "MoureDev"
isTeacher = Symbol("mysymbol")
mySymbol = 9879887765765878987656789876789876n
myBigInt = false
undefinedValue = null
nullValue = 9879887765765878987656789876789876789876n

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const myName2 = "Brais Moure" // String
const age2 = 37 // Number
const isTeacher2 = true // Boolean
const mySymbol2 = Symbol("mysymbol")  // Symbol
const myBigInt2 = 9879887765765878987656789876789876n // BigInt
const undefinedValue2 = undefined // Undefined
const nullValue2 = null // Null

// 9. A continuación, modifica los valores de las constantes

// myName2 = "MoureDev"
// age2 = 38
// isTeacher2 = false
// mySymbol2 = Symbol("mysymbol2")
// myBigInt2 = 9879887765765878987656789876789877n
// undefinedValue2 = null
// nullValue2 = 98

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser