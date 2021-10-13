class Zapatillas {
    constructor(marca, modelo, color, talle, precio) {
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.talle = talle
        this.precio = precio
    }

    agregarIva() {
        const iva = parseInt(this.precio * 1.21)
        return iva
    }

    queColor() {
        return this.color;
    }

}

zapatilla = new Zapatillas('Nike', 'Airmax', 'Gris', 41, 20000);

console.log(zapatilla);
console.log(zapatilla.agregarIva());
console.log(zapatilla.queColor());