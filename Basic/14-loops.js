// Loops o bucles

// for

for (let i = 0; i < 5; i++) {
  console.log(`Hola ${i}!`) // Hola 0! Hola 1! Hola 2! Hola 3! Hola 4!
}

const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
  console.log(`Elemento ${numbers[i]}`) // Elemento 1, 2, 3, 4, 5 (numbers[i])
}

// while - mientras

while (i < 5) {
  console.log(`Hola ${i}!`)
  i++
}

// do while - mientras
do {
  console.log(`Hola ${i}!`)
  i++
}while (i<5)

const  myArray =[1,2,3,4]

for (let valor of myArray){
  console.log(valor)
}
