class Producto {
    constructor(nombre, precio, enStock) {
        this.nombre = nombre;
        this.precio = precio;
        this.enStock = enStock;
    }
    getPrecioConIva() {
        return this.precio * 1.21
    }

    getPrecio() {
        return this.precio
    }
}