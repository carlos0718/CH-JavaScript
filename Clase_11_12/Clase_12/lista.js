import { productos } from './productos.js';


/* 
$('body').prepend('<button id="boton">Botón</button>');

$('#boton').on('click', () => {
    console.log('Hiciste Click!')
})
*/

/* // Agregar un input y botón
$('body').prepend('<button id="btn">Enviar</button>')
$('body').prepend('<input id="input" type="text" autocomplete="off"></input>')

$('#input').change((event) => {
    console.log(event.target.value);
})
*/

class ItemCarrito {
    constructor(cantidad, item) {
        this.cantidad = cantidad
        this.item = item
    }
}

const carrito = JSON.parse(localStorage.getItem('carrito')) || []


for (const producto of productos) {
    let count = 1
    $('#contenedor-lista-productos').append(
        `<div class="contenedor-producto">
            ${producto.nombre}
            $${producto.precio}
        </div>
        
        Cantidad: 
        <!-- // TODO: validación de stock -->
        <select id?"select-count-${producto.id}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>


        <button id="btn-add-${producto.id}">Agregar</button>
        `
    )



    // Acceder al select de cantidad para producto
    $(`#select-count-${producto.id}`).change((event) => {
        // console.log(event.target.value);
        count = +event.target.value
            /* // Dispara un vento click desde un evento change
            $(`#btn-add-${producto.id}`).trigger('click'); */
    })


    // Método 1
    /* $(`#btn-add-${producto.id}`).on('click', () => {
        console.log(producto);
    }) */

    // Método 2
    $(`#btn-add-${producto.id}`).click(() => {
        /* console.log(`Agregar ${count} de ${JSON.stringify(producto)}`); */

        const itemCarrito = new ItemCarrito(count, producto)
        addItemCarrito(itemCarrito)
    })


}

const addItemCarrito = (item) => {
    const itemCarrito = carrito.find(el => el.item === item.producto)
    if (!itemCarrito) {
        carrito.push(item)
        console.log(carrito)
    } else {
        itemCarrito['cantidad'] = item.cantidad
        console.log(carrito)
    }
    //console.log(itemCarrito)
    localStorage.setItem('carrito', JSON.stringify(carrito))
        //renderCarrito()
}

const renderCarrito = () => {
    console.log(carrito);
    $('#contenedor-carrito').empty()
    for (let el of carrito) {
        $('contenedor-carrito').append(
            `
                <div>${el.item.nombre} - Cantidad: ${el.cantidad}</div>
            `
        )
    }
}