/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// 1. Crea un array que almacene cinco animales

animales = ["vaca", "oveja", "caballo", "gallina", "conejo"]

// 2. Añade dos más. Uno al principio y otro al final

animales.unshift("mosca")
// animales.splice(0,0, "mosca")

animales.push("periquito")

// 3. Elimina el que se encuentra en tercera posición

console.log(animales.splice(2,1))

console.log("Array de animales: " + animales)

// 4. Crea un set que almacene cinco libros

libros = new Set(["El quijote", "La Biblia", "Romancero Gitano", "El Jarama", "La Colmena"])

// 5. Añade dos más. Uno de ellos repetido

libros.add("El Perfume")
libros.add("Yerma")
libros.add("El Perfume")

// 6. Elimina uno concreto a tu elección


console.log("Set de libros: " + libros)
console.log(libros)

libros.delete("La Biblia")

console.log("Set de libros: " + libros)
console.log(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre

let meses = new Map ([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"]
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if (meses.has(5)) {
  console.log(meses.get(5))
} else {
  console.log("No existe la clave 5")
}

console.log(meses)

// 9. Añade al mapa una clave con un array que almacene los meses de verano

meses.set([6, 7, 8], "Verano")
console.log(meses)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

const celta = ["Aspas", "Mostovoi", "Karpin", "Mazinho"]
console.log(celta)
const celtaSet = new Set (celta)
console.log(celtaSet)
const celtaMap = new Map()
celtaMap.set("jugadores", celtaSet)
console.log(celtaMap)

