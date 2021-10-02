let cuota = Number(prompt('Ingrese el precio del producto.'))

function cuotaSeis(cuota) {
    let division = parseInt(cuota / 6)
    alert(`6 cuotas (sin interes): El precio es de $${division}.`)
}

function cuotaOcho(cuota) {
    let division = parseInt(cuota / 8)
    alert(`6 cuotas (sin interes): El precio es de $${division}.`)
}

function cuotaDoce(cuota) {
    let division = parseInt(cuota / 12)
    alert(`6 cuotas (sin interes): El precio es de $${division}.`)
}

cuotaSeis(cuota)

cuotaOcho(cuota)

cuotaDoce(cuota)