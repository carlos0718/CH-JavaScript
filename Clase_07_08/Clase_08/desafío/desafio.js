let marca = prompt('Ingrese la marca de la zapatilla.')
let precio = parseInt(prompt('Ingrese el precio de la zapatilla.'))
let dinero = parseInt(prompt('Ingrese el dinero con el que cuenta.'))
let color = 'green'

const div = document.createElement('div');
div.innerHTML = `<h2>Marca: ${marca}</h2>
                <h3>El precio es de $${precio}</h3>`

document.body.append(div);

const b = document.createElement('b');

if (dinero < precio) {
    color = 'red'
    b.innerText = `No cuenta con dinero ($${dinero}) para pagar estas zapatillas!`
} else {
    color = 'green'
    b.innerText = `Cuenta con dinero ($${dinero}) para pagar estas zapatillas!`
}
b.style.color = color
div.append(b);