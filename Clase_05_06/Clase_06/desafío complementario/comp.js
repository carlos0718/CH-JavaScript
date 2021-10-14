var zapatillas = ['nike', 'adidas', 'fila', 'puma', 'jordan', 'new balance', 'vans', 'converse', 'under armour', 'topper', 'umbro']
var precios = [20000, 30000, 10000, 9000, 25000, 12000]

console.log(precios)

console.log('Precios acomodados de menor a mayor')

precios.sort(function(a, b) {
    return a - b;
})
console.log(precios)

console.log('Precios acomodados de mayor a menor')

precios.sort(function(a, b) {
    return b - a;
})
console.log(precios)

console.log(zapatillas)

zapatillas.sort()

console.log('Array acomodado')
console.log(zapatillas)