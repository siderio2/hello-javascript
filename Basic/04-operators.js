// Operadores

// Operadores aritméticos

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b) // Módulo	
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)

// Operadores de asignación

let myVariable = 2
console.log(myVariable);
myVariable += 2
console.log(myVariable);
myVariable -= 2
console.log(myVariable);
myVariable *= 2
console.log(myVariable);
myVariable /= 2
console.log(myVariable);
myVariable %= 2
console.log(myVariable);
myVariable **= 2
console.log(myVariable);

// Operadores de comparación

console.log(a > b) // Mayor que
console.log(a < b) // Menor que
console.log(a >= b) // Mayor o igual que
console.log(a <= b) // Menor o igual que
console.log(a == b) // Igual que
console.log(a == 6) // Igualdad por valor
console.log(a == "6")// Igualdad por valor
console.log(a == a)
console.log(a === a)// Igualdad por identidad (por valor y tipo)
console.log(a === 6)
console.log(a === "6")
console.log(a != 6) // Diferente que
console.log(a !== "6") // Diferencia por identidad (por valor y tipo)

// Truthy values (valores verdaderos)

// Todos los números positivos y negativos menos el 0
// Todas las cadenas de texto menos las vacias
// El boolean true

// Falsy values (valores falsos)

// 0, '', null, undefined, NaN, false

// Operadores logicos

console.log(a && b) // AND (operador binario)
console.log(a || b) // OR (operador binario)
console.log(!a) // NOT (operador unario)

// Operadores ternarios

console.log(a > b ? "a es mayor que b" : "a es menor o igual que b")