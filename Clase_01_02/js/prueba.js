// Variables
// var, let, const

// Declaracion de variable
var declaracion;
// Asignando
declaracion = "esto es una declaracion";
// Reasignando
declaracion = "aqui reasigno el valor de la variable";
// Tipos de Datos

// Strings -> cadena de textos
const nombre = "natalia";
const apellido = "Suarez";

console.log(`${nombre} y mi apellido es ${apellido}`)

// Integer -> numeros

let numero = 2;
let num = 3
let float1 = 1.5

// Suma
console.log("concatenacion suma: " + (parseInt(numero + num)))
console.log('Concatenacion float: ' + (parseFloat(num + float1)))

// Resta 
console.log("concatenacion resta: " + (parseInt(num - numero)))


// Prompt 
let ingreso = Number(prompt('Ingrese un numero: '))
let ingreso2 = 3

let suma = ingreso + ingreso2

console.log(suma);

alert(`Su numero es ${suma}`)


// Condicionales

// if

let num1 = 1
let num2 = "1"

if (num !== num2) {
    console.log('Los dos datos son iguales.')
} else {
    console.log('Los datos son distintos.')
}

if (num === num2) {
    console.log('Los dos datos son iguales.')
} else {
    console.log('Los datos son distintos.')
}