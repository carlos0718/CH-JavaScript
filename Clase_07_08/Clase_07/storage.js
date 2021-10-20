// CRUD
// Create, read, update, delete

class Perro {
    constructor(nombre, color, edad) {
        this.nombre = nombre;
        this.color = color;
        this.edad = edad;
    }
}

let perritos = []

const getAll = () => {
    perritos = JSON.parse(localStorage.getItem('perritos'));
    console.log(typeof perritos);
    return perritos;
}

// Metodo para agrear un perro a la lista 
const create = (perrito) => {
    perritos.push(perrito);
    localStorage.setItem('perritos', JSON.stringify(perritos));
}

// Metodo para hallar un perro
const findOne = (nombre) => {
    const perro = perritos.find(perro => perro.nombre == nombre)

    if (!perro) {
        throw new Error(`No existe ${nombre}`);
    }
    return perro
}

// Metodo para eliminar un perrito
const remove = (nombre) => {

    const perro = findOne(nombre);

    const index = perritos.findIndex(perro => perro.nombre == nombre)

    if (index >= 0) {
        perritos.splice(index, 1);
    }
}

// Metodo para actualizar el perro
const update = (nombre, color) => {
    const perro = findOne(nombre)
    perro.color = color
}


// Paso 1 
// Crear un nuevo perro como instancia de la clase perro.
const perro1 = new Perro('Flopi', 'marron', 12);
const perro2 = new Perro('Tomi', 'Negro', 13);
const perro3 = new Perro('Suki', 'Blanco', 3);
const perro4 = new Perro('Perla', 'Blanco', 9);

// Paso 2 
// Agregar perro1 a la lista.
create(perro1);
create(perro2);
create(perro3);
create(perro4);

// Paso 3 
// Busco un perro por su nombre.
//console.log(findOne('Flopi'));

// Paso 4 
// actualizar el color del perro
//update('Flopi', 'Blanco');


console.log(getAll())