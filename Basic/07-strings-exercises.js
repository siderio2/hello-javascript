/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto
console.log("Hay que concatenar estas " + "dos cadenas de texto")

// 2. Muestra la longitud de una cadena de texto
let cadena = "Califragilístico espialidoso"
console.log(cadena.length);

// 3. Muestra el primer y último carácter de un string
console.log("Primero: -" + cadena.charAt(0) + "- Último: -" + cadena.charAt(cadena.length -1) + "-")

// 4. Convierte a mayúsculas y minúsculas un string
let may = cadena.toUpperCase
let min = cadena.toLowerCase

// 5. Crea una cadena de texto en varias líneas
let cadena2 = `Para poder crear 
una cadena de 
texto en varias líneas, usamos 
las template literals con backtick`

// 6. Interpola el valor de una variable en un string
let miFisico = "simplemente impresionante"
console.log(`Soy un tipo ${miFisico}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(cadena2.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(cadena2.includes("Poder"))

// 9. Comprueba si dos strings son iguales
console.log(cadena === cadena2)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(cadena.length === cadena2.length)