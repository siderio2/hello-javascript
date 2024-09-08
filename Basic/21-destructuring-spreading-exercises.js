/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array

const arrayUno = [1, 2, 3, 4, 5, 6]
const [itemUno, itemDos] = arrayUno
console.log('1: ' + itemUno + ', ' + itemDos)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

const [dosUno,,,,,, dosDos = 14] = arrayUno
console.log('2: ' + dosUno + ' y ' + dosDos)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

const objetoUno = {
  prop1 : 'prop1',
  prop2 : 'prop2',
  prop3 : 'prop3',
}

const { prop3, prop2 } = objetoUno
console.log('3: ' + prop3 + ' y ' + prop2 )


// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

const { prop1: primera, prop2: segunda } = objetoUno
console.log('4: ' + primera + ' y ' + segunda)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
objetoUno.objetoAnidado = {
  propAnidada1 : 1,
  propAnidada2 : 2,
  propAnidada3 : 3,
}

const { propAnidada1, propAnidada2 } = objetoUno.objetoAnidado
console.log('5: ' + propAnidada1 + ' y ' + propAnidada2)

const { prop1, objetoAnidado: { propAnidada3 }} = objetoUno

console.log('5bis: ' + prop1 + ' y ' + propAnidada3)



// 6. Usa propagación para combinar dos arrays en uno nuevo

const arrayDos = [10, 20, 30]
const nuevoArray = [...arrayUno, ...arrayDos]
console.log('6: ' + nuevoArray)

// 7. Usa propagación para crear una copia de un array

const copiaArrayUno = [...arrayUno]
console.log('7: ' + copiaArrayUno)

// 8. Usa propagación para combinar dos objetos en uno nuevo

const objetoDos = {
  prop1 : 1,
  prop2 : 2,
  prop3 : 3,
}

const nuevoObjeto = { ...objetoUno, ...objetoDos}
console.log('8: ' + nuevoObjeto.objetoAnidado.propAnidada1 + ' y ' + nuevoObjeto.prop3)

// 9. Usa propagación para crear una copia de un objetoç

const copiaObjetoDos = { ...objetoDos }
console.log('9: ' + copiaObjetoDos.prop2)

// 10. Combina desestructuración y propagación

const [uno,,tres, ...resto] = arrayUno

console.log('10: ' + uno + ', ' + tres + ' y ' + resto)