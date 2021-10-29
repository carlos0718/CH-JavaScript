/* const zapatilla = {
    marca: prompt('Ingrese la marca de la zapatilla.'),
    color: prompt('Ingrese el color que busca.'),
    precio: prompt('Ingrese el precio de la zapatilla.'),

    calcIva: function() {
        let iva = this.precio * 1.21;
        return iva;
    },

    mostrarZapatilla: function() {
        let mostrar = `Marca: ${this.marca}, Color: ${this.color} y `;
        return mostrar;
    }
};

alert(`${zapatilla.mostrarZapatilla()}el precio final es de $${zapatilla.calcIva()} (iva incluido).`); */

const productos = [{
        img: '../img/zadidas.webp',
        marca: "adidas",
        precio: '$20000',
        genero: 'mujer'
    },
    {
        img: '../img/zadidas1.webp',
        marca: "adidas",
        precio: '$20000',
        genero: 'hombre'
    },
    {
        img: '../img/zadidas2.webp',
        marca: "adidas",
        precio: '$20000',
        genero: 'mujer'
    },
    {
        img: '../img/zadidas3.webp',
        marca: "adidas",
        precio: '$20000',
        genero: 'hombre'
    },
    {
        img: '../img/zadidas4.webp',
        marca: "adidas",
        precio: '$20000',
        genero: 'mujer'
    },
    {
        img: '../img/zadidas5.webp',
        marca: "adidas",
        precio: '$20000',
        genero: 'hombre'
    },
    {
        img: '../img/zadidas6.webp',
        marca: "adidas",
        precio: '$20000',
        genero: 'mujer'
    },
    {
        img: '../img/zadidas7.webp',
        marca: "adidas",
        precio: '$20000',
        genero: 'mujer'
    },
    {
        img: '../img/zadidas8.webp',
        marca: "adidas",
        precio: '$20000',
        genero: 'hombre'
    },
    {
        img: '../img/zadidas9.webp',
        marca: "adidas",
        precio: '$20000',
        genero: 'mujer'
    }

]

/* Desafío Complementario - Generar HTML */

productos.forEach((p) => {
    const seccionProducto = document.getElementById('productoSeccion')
    seccionProducto.innerHTML += `<div class="producto"><img src="${p.img}" alt=""><h3>${p.marca}</h3><p>${p.precio}</p><a id="btnCompra" href="">Comprar</a></div>`
    document.body.append(seccionProducto);
});



const btnCompra = document.getElementById('btnCompra');
const carrito = document.getElementById('carrito');

btnCompra.addEventListener('click', () => {
    alert('Producto añadido!');
    carrito.style.color = 'red';
});