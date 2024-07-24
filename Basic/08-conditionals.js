// if, else if, else

// if (si)
let age = 90

if (age == 37) {
  console.log("La edad es 37")
}

// else (si no)
if (age == 37) {
  console.log("La edad es 37")
} else {
  console.log("La edad no es 37")
}

// else if (si no, si)
if (age == 37) {
  console.log("La edad es 37")
} else if (age < 18) {
  console.log("Es menor de edad")
} else {
  console.log("La edad no es 37 ni es menor de edad")
}

// Operador ternario
let message = age == 37 ? "La edad es 37" : "La edad no es 37"
console.log(message)

// switch
let day = 9
let dayname

switch (day) {
  case 0:
    dayname = "Domingo"
    break
  case 1:
    dayname = "Lunes"
    break
  case 2:
    dayname = "Martes"
    break
  case 3:
    dayname = "Miercoles"
    break
  case 4:
    dayname = "Jueves"
    break
  case 5:
    dayname = "Viernes"
    break
  case 6:
    dayname = "Sabado"
    break

  default:
    dayname = "Dia no encontrado. Los valores posibles son: 0, 1, 2, 3, 4, 5, 6"
}

console.log(dayname)