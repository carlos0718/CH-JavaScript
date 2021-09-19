var nombre = prompt('Ingrese su Nombre');
var apellido = prompt('Ingrese su apellido')
var edad = prompt('Ingrese su edad');

var jubilacion = parseInt(60 - edad)

alert(`Su nombre y apellido es: ${nombre} y ${apellido}. Su edad ${edad}`)
alert(`Le faltan ${jubilacion} años para jubilarse (?)`)