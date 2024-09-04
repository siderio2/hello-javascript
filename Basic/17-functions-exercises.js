/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function sumar(num1, num2) {
  return num1 + num2
}
console.log('1: ' + sumar(49,5))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

const escogerMayor = function (numeros) {
  let mayor = numeros[0]
  for (let i = 1; i < numeros.length; i++) {
    const element = numeros[i]
    if (element > mayor) {
      mayor = element
    }
  }
  return mayor
}
console.log('2: ' + escogerMayor([2, 5, 7, 21, 49, 9]))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function contarVocales(cadena) {
  const vocales = ['a', 'e', 'i', 'o', 'u']
  const minusCadena = cadena.toLowerCase()
  let cuenta = 0
  for (const element of minusCadena) {
    if (vocales.includes(element)) {
      cuenta++
    }
  }
  return cuenta
}
const cadena = 'Cadena con muuUUchas vocalEs'
console.log('3: ' + contarVocales(cadena) + ' vocales')

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

const cadenas = ['cosa', 'mucho', 'Ana', 'RTVG', 'fIn']

/* Tal vez más elegante, pero no devuelve un nuevo array, transforma el mismo
* const enMayusculas = cadenas.map(cadena => cadena.toLocaleUpperCase())
* console.log('4: ' + enMayusculas)
*/
const enMayusculas = function (array) {
  newArray = []
  for (const element of array) {
    newArray.push(element.toUpperCase())
  }
  return newArray
}

console.log('4: ' + enMayusculas(cadenas));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function comprobarNumero(num) {
  function esPrimo(numero) {
    // Casos base
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0) return false;

    // Comprobamos divisibilidad por 6k ± 1 (optimización adicional)
    let i = 5;
    while (i * i <= numero) {
      if (numero % i === 0 || numero % (i + 2) === 0) return false;
      i += 6;
    }

    return true;
  }

  return esPrimo(num)? ' es primo' : ' no es primo'
}
const numToCheck = 79
console.log('5: ' + numToCheck + comprobarNumero(numToCheck));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function sonIguales(array1, array2) {
  const elementosComunes = new Array()
  array1.forEach(element => {
    if (array2.includes(element)) {
      elementosComunes.push(element)
    }
  })
  return elementosComunes
}
const array1 = [2, 5, 67, 8, 2.4, -2]
const array2 = new Array(6, -1, 4, -2, 0, 2, 2.9)
console.log('6: ' + sonIguales(array1, array2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

const sumarPares = function (array) {
  let suma = 0
  for (const element of array) {
    if (element % 2 === 0) {
      suma += element
    }
  }
  return suma
}

console.log('7: ' + sumarPares(array2));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function cuadrados (num) {
  return num * num
}

const nums = [4, 6, 87, 3]

console.log('8: ' + nums.map(cuadrados));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

const ltr = "Soy una frase cualquiera"
function reverso(cadena) {
  const array = cadena.split(' ')
  array.reverse()
  const rtl = array.join(' ')
  return rtl
}

console.log('9: ' + reverso(ltr))

// 10. Crea una función que calcule el factorial de un número dado

function factorial(num) {
  let resultado = 1;
  for (let i = 2; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log('10: ' + factorial(6));
