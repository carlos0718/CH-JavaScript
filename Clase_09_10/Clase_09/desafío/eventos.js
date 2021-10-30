const cuotasTres = document.getElementById('cuotas-3')
const cuotasSeis = document.getElementById('cuotas-6')
const cuotasDoce = document.getElementById('cuotas-12')

let precio = prompt('Ingrese el monto a pagar')

cuotasTres.addEventListener('click', () => {
    cuotasTres.innerHTML = `<p>El monto a pagar $${precio} quedaría en $${parseInt(precio/3)}</p>`
})
cuotasSeis.addEventListener('click', () => {
    cuotasSeis.innerHTML = `<p>El monto a pagar $${precio} quedaría en $${parseInt(precio/6)}</p>`
})
cuotasDoce.addEventListener('click', () => {
    cuotasDoce.innerHTML = `<p>El monto a pagar $${precio} quedaría en $${parseInt(precio/12)}</p>`
})