let padre = document.getElementById("personas");

let personas = ["Manuel", "Anto", "Maxi", "Zogon", "Machito"];

for (const persona of personas) {
    let li = document.createElement("li");
    li.innerHTML = persona
    padre.appendChild(li);
};



let marca = prompt('Ingrese la marca de la zapatilla.')
let precio = prompt('Ingrese el precio de la zapatilla.')

let div = document.createElement('div');
div.innerHTML = `<h2>Marca: ${marca}</h2>
                <h3>El precio es de $${precio}</h3>`

document.body.append(div);


let parrafo = document.createElement("p");
// Insertar HTML interno
parrafo.innerHTML = "<h2>¡Hola Coder!</h2>";
// Añadir el nodo Element como hijo de body
document.body.appendChild(parrafo);
/* 
console.dir(document)
console.dir(document.head)
console.dir(document.body) */

/* let marca = prompt('Ingrese la marca del producto.');
let precio = parseInt(prompt('Ingrese el precio del producto.')); */

/* const producto = {
    id: Math.floor(Math.random() * 101),
    marca: toString(marca),
    precio: precio
};

let contenedor = document.createElement("div");
contenedor.innerHTML = `<h3>ID: ${producto.id}</h3>
                        <p>Marca: ${producto.marca}</p>
                        <b>El precio es de $${producto.precio}</b>`

document.body.appendChild(contenedor);

 */
var tiempo = 100;
let mensaje = ['Ofertas', 'Nuevos ingresos el próximo mes!', 'Obtené un cupon de descuento!', 'Participá de nuestro sorteo'];
var indexMensaje = 0

function cambiarMensaje() {
    if (indexMensaje >= mensaje.length) {
        indexMensaje = 0;
        document.getElementById('contMensaje').innerHTML = mensaje[indexMensaje];
        indexMensaje++
        setTimeout(cambiarMensaje(), tiempo);
    }
}

document.write('<div id="contMensaje"></div>')
window.onload = cambiarMensaje();


console.log(cambiarMensaje())

/*
for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3>ID: ${producto.id}</h3>
    <p>Marca: ${producto.marca}</p>
    <b>$${producto.Precio}</b>`

}*/
/* 
var heading = document.createElement('h1');
var heading_text = document.createTextNode('texto de prueba con node');

heading.appendChild(heading_text);
document.body.appendChild(heading); */