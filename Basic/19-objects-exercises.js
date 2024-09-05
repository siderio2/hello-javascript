/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

// 1. Crea un objeto con 3 propiedades

let fulanoGuapo = {
  nombre: 'Desi',
  apel1: 'Martínez',
  apel2: 'Silva',
}

// 2. Accede y muestra su valor

console.log(fulanoGuapo.nombre)
console.log(fulanoGuapo.apel1)
console.log(fulanoGuapo.apel2)

// 3. Agrega una nueva propiedad

fulanoGuapo.edad = 52
console.log(fulanoGuapo)

// 4. Elimina una de las 3 primeras propiedades

delete fulanoGuapo.apel2
console.log(fulanoGuapo)

// 5. Agrega una función e invócala

fulanoGuapo.saludo = function () {
  console.log('Hey, como estáis, nenas??')
}

fulanoGuapo.saludo()

// 6. Itera las propiedades del objeto

for (const key in fulanoGuapo) {
  console.log(key)
}

// 7. Crea un objeto anidado

fulanoGuapo.cosas = {
  coche: 'Mercedes',
  moto: 'Honda',
}

// 8. Accede y muestra el valor de las propiedades anidadas

for (const key in fulanoGuapo.cosas) {
console.log(key)
}
// 9. Comprueba si los dos objetos creados son iguales
const otroFulano = {
  nombre: 'vulgar',
  aspecto: 'miserable',
  atractivo: 0,
}

const otroFulanoMas = {
  nombre: 'vulgar',
  aspecto: 'miserable',
  atractivo: 0
}

console.log(otroFulano == otroFulanoMas)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(otroFulano.aspecto === otroFulanoMas.aspecto)