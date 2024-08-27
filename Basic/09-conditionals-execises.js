/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let name = "Desi"
if (name === "Desi") {
  console.log(`Sen dúbida, estamos ante ${name}.`)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "Desi"
let pass = "1234"
if (user === "Desi" && pass === "1234") {
  console.log(`Bienvenido, ${user}, la contraseña es correcta.`)
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let num = 7
if (num === 0) {
  console.log("Es un cero")
} else if (num > 0) {
  console.log("Es positivo")
} else {
  console.log("Es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edadLegal = 18
let edad = 26

if (edad >= edadLegal) {
  console.log("Muy bien, ya puedes  votarrrr ")
} else {
    let diff = edadLegal - edad
    console.log("Nada, vuélvase a casa, no puede votar hasta dentro de " + diff + "años");
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let condicion = edad >= 18 ? "adulto" : "menor"
// console.log(condicion);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 2
let estacion = "invierno"
if (mes > 3 && mes < 7) {
  estacion = "primavera"
} else if (mes > 6 && mes < 10) {
  estacion = "verano"
} else if (mes > 9 && mes < 13) {
  estacion = "otoño"
}
if ( mes < 1 || mes > 12) {
  console.log("Mes tiene que tener un valor entre 1 (enero) y 12 (diciembre)")
} else {
  console.log("Ahora mismo estamos en " + estacion)
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

let dias = 31
if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
  dias = 30
} else if (mes == 2) {
  dias = "28 o 29"
}

if ( mes < 1 || mes > 12) {
  console.log("Mes tiene que tener un valor entre 1 (enero) y 12 (diciembre)")
} else {
  console.log(`El mes número ${mes} tiene ${dias} días`)
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "gl"
switch (idioma) {
  case "es":
    console.log("Bienvenid@")
    break
  case "it":
    console.log("Benvenut@")
    break
  case "gl":
    console.log("Benvid@")
    break
  case "fr":
    console.log("Bienvenue")
    break
  default:
    console.log("Welcome")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes) {
  case 1:
  case 2:
  case 3:
    console.log("En Switch estamos en invierno")
    break
  case 4:
  case 5:
  case 6:
    console.log("En Switch estamos en primavera")
    break
  case 7:
  case 8:
  case 9:
    console.log("En Switch estamos en verano")
    break
  case 10:
  case 11:
  case 12:
    console.log("En Switch estamos en otoño")
    break
  default:
    console.log("En Switch, mes tiene que tener un valor entre 1 (enero) y 12 (diciembre)")
    break
}


// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log(`En Switch, el mes ${mes} tiene 31 días`)
    break
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(`En Switch, el mes ${mes} tiene 30 días`)
    break
  case 2:
    console.log(`En Switch, el mes ${mes} tiene 28 ó 29 días`)
    break
  default:
    console.log("En Switch, mes tiene que tener un valor entre 1 (enero) y 12 (diciembre)")
    break
}