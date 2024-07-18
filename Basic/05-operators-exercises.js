/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética
let a = 5
let b = 10

let suma = a + b
let resta = a - b
let multiplicacion = a * b
let division = a / b
let modulo = a % b
let exponente = a ** b

let incremento = a++
let decremento = b--

// 2. Crea una variable para cada tipo de operación de asign., que haga uso de las vars. usadas para las op. aritméticas

let asignada = suma // asignación
let sumAsignada = asignada += resta // suma y asignación
let restAsignada = asignada -= multiplicacion // resta y asignación
let multAsignada = asignada *= division // multiplicación y asignación
let divAsignada = asignada /= modulo // división y asignación
let modAsignada = asignada %= exponente // modulo y asignación
let expAsignada = asignada **= exponente // exponente y asignación

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
console.log(a < b)
console.log(a > 3)
console.log(b >= a)
console.log(b == "9")
console.log(a === 6)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(a > b)
console.log(a !== 6)
console.log(a < 3)
console.log(b <= a)
console.log(b != "9")

// 5. Utiliza el operador lógico and

console.log(5 < 10 && b < 20)

// 6. Utiliza el operador lógico or

console.log(5 == 10 || b < 20)

// 7. Combina ambos operadores lógicos

console.log(5 == 10 || b < 20 && b > 1)

// 8. Añade alguna negación

console.log(5 == 10 || !(b > 20 && b != 1))

// 9. Utiliza el operador ternario

console.log(b == 9 ? 'verdadero' : 'falso')

// 10. Combina operadores aritméticos, de comparáción y lógicos

console.log(5 == (b - 4) || b < 20 && b <= 3**2 ? 'verdadero' : 'falso')