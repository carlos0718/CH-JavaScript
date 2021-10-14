zapatillas = ['nike', 'adidas', 'fila', 'puma', 'jordan', 'ford']

const indexEle = zapatillas.indexOf('ford');
zapatillas.splice(indexEle, 1);

zapatillas.push('new balance')

zapatillas.sort()

console.log(zapatillas.join(' / '))
console.log(zapatillas)