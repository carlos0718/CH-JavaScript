let numero = Number(prompt('Ingrese un numero'))

function bucle(numero) {
    for (let i = 0; i < numero; i++) {
        console.log(i)
    }
}
bucle(numero);


function bucle1(num, nombre) {
    for (let i = 0; i <= num; i++) {
        console.log(i)
    }
    console.log('Hola ' + nombre + ' el nombre que ingresaste fue ' + num)
};


function suma(num, num2) {
    console.log(parseInt(num + num2))
}

suma(2, 2)


let numero1 = Number(prompt('Ingrese un numero'));
let numero2 = Number(prompt('Ingrese un numero'));

function iva(valorProducto, iva) {
    let aux = 1 + (iva / 100);
    let resultado = valorProducto * aux;
    return parseInt(resultado)
}


console.log(iva(numero1, numero2))