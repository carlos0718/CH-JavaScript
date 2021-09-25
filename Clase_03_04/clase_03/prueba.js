/*
const numero = prompt('Ingrese un numero')

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} X ${i} = ${parseInt(numero*i)}`)

}

for (let i = 0; i < 10; i++) {

    console.log(`numero: ${i}`)
    if (i == 5) {
        console.log('BREAK')
        break;
    }

}
*/

// While
/*
let repetir = true

while (repetir) {
    console.log
}
*/

// Do while
/*
let i = prompt('Ingrese nombre')
let j = prompt('Ingrese contraseña')

while ((i != 'natalia' && j != '123')) {
    alert(`El usuario ingresó ${i} y ${j}`)

    let i = prompt('Ingrese nombre')
    let j = prompt('Ingrese contraseña')

}
*/

/*
let i = prompt('Ingrese nombre')
let j = prompt('Ingrese contraseña')

do {
    alert(`El usuario ingresó ${i} y ${j}`)

    let i = prompt('Ingrese nombre')
    let j = prompt('Ingrese contraseña')

} while ((i.toLocaleLowerCase() != 'natalia' && j != '123'))
*/

const nombre = prompt('Ingrese su nombre')

switch (nombre) {
    case 'manu':
        alert('Hola manu XD')

        break;
    case 'carleto':
        alert('Hola carleto WTF')

    default:
        alert('No te conozco quien chota sos')
        break;
}