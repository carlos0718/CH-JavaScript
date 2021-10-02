let dato = Number(prompt('Ingrese el monto dispuesto a pagar'))

function impuesto(dato) {
    let impuesto = (dato * 21) / 100;
    console.log(`El precio final es de $${dato + impuesto} (iva incluido).`)
}

function descuento(dato) {
    let descuento = (dato * 10) / 100;
    console.log(`El precio final es de $${dato - descuento} (descuento del 10% incluido).`)
}

impuesto(dato)
descuento(dato)