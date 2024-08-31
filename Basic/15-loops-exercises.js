/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let index = 1; index < 21; index++) {
  console.log('Num. ' + index)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let num = 1
let sum = 0
do {
  sum += num
  ++num
} while (num < 101)
console.log(sum)


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

let num2 = 1
while (num2 < 51) {
  if (num2%2 === 0) {
    console.log('Par: ' + num2)
  }
  num2++
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

const nombres = ['Ana', 'Bea', 'Chus', 'Desi', 'Eva']
for (const element of nombres) {
  console.log(element);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

function cuentaVocales (cadena) {
  // const caracteres = cadena.length
  const minusculas = cadena.toLowerCase()
  let numVocales = 0
  let vocales = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < cadena.length; i++) {
    if (vocales.includes( minusculas[i] )) {
      numVocales ++
    }
  }
  return numVocales
}

const cadena = "plkgy tr7rt 43"
let numVocales = cuentaVocales(cadena)
console.log('Hay ' + numVocales + ' vocales')

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

const numeros = [10, 9, 4]
if (numeros.length < 2) {
  console.log('Se necesitan al menos dos números para hallar el producto total del array');
} else {
  let producto = numeros[0] * numeros[1]
  let posicion = 2
  while (posicion < numeros.length) {
    producto *= numeros[posicion]
    posicion++
  }
  console.log('El producto de multiplicar todos los números del array es ' + producto)
}

// La solución óptima sería utilizando el método reduce
const numerosReduce = [2, 3, 4, 5]
const producto = numerosReduce.reduce((acumulador, numero) => acumulador * numero, 1)
console.log("El producto es:", producto)


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let multiplicador = 1
do {
  console.log('5 x ' + multiplicador + ' = ' + (multiplicador * 5))
  multiplicador++
} while (multiplicador < 11)

// 8. Usa un bucle para invertir una cadena de texto

const texto = "a torre da derrota"
let posicionOriginal = (texto.length - 1)
let inversion = ""
while (posicionOriginal >= 0) {
  inversion += texto[posicionOriginal]
  posicionOriginal--
}
console.log(`Texto invertido: ${inversion}`);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let serie = [0, 1]
do {
  let nuevoNum = serie[serie.length - 1] + serie[serie.length - 2]
  serie.push(nuevoNum)
} while (serie.length < 10)
console.log(serie);


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

const arrayNumeros = [5, 10, 1, 20, 25, 3, 35, -12, 45, 9]
let arrayMayoresDiez = []
arrayNumeros.forEach(element => {
  if (element > 10) {
    arrayMayoresDiez.push(element)
  }
})
console.log(arrayMayoresDiez);
