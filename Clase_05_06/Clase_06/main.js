// Arrays
// Mejor practicar usar const, ya que no queremos que deje
// de ser un array.

//const arr = new Array(4)

const animales = ['gato', 'perro', 'elefante', 'cebra'];

console.log(animales);

//acceder a una posición
console.log(animales[2]);
console.log(animales[1]);

for (let index = 0; index < 3; index++) {
    console.log(animales[index]);

}

// lengh = muestra la longitud del array
console.log(animales.length);

// Otra forma de iterar un array
for (const animal of animales) {
    console.log(animal);
}


console.log('---------------------------------------');


// ToString()
// Podemos convertir un array a un string

console.log(animales.toString());

console.log(animales);

// .push('') para agregar un elemento al array.
animales.push('Leon');
// .unshift('') añade un elemento al inicio del array.
animales.unshift('Cobra');
console.log(animales);

// .join('') une elementos, separandolos por algún caracter
// no modifica el array.
console.log(animales.join(' - ')); // gato - perro - loro - leon

// .concat(array) concatena un array con otro array.
const frutas = ['Manzana', 'Uva', 'Frutilla'];
console.log(animales.concat(frutas));

// .slice(1, 4) Muestra los elementos pasado por parametros
console.log(animales.slice(1, 3));

// indexOf('') Nos muestra en qué posición esta el elemento
// sirve mucho para saber si existe un elemento o no.
console.log(animales.indexOf('Leon'));
console.log(animales.indexOf('Sapo'));

// Splice(desde, hasta) Nos permite quitar un elemento de un array
const indexEle = animales.indexOf('elefante');

animales.splice(indexEle, 1)
console.log(animales);

console.log('----------------------------------')

// forEach
animales.forEach((elemento, index, array) => {
    console.log(elemento)
    console.log(index)
    console.log(array)
})

// .sort('')