// C: create
// R: read
// U: update
// D: delete

class Perro {

    constructor(nombre, color, edad, id) {
        this.id = id;
        this.nombre = nombre.toLowerCase()
        this.color = color.toLowerCase()
        this.edad = edad
    }

}

// Lista de perritos
let perritos = JSON.parse(localStorage.getItem('perritos')) || []


// Metodo que retorna la lista de perritos
const getAll = () => {
    return perritos;
}

// Metodo para agregar un perro a la lista
const create = (perrito) => {
    perritos.push(perrito)
    localStorage.setItem('perritos', JSON.stringify(perritos))
}

// Metodo para hallar un perro por nombre
const findOne = (id) => {

    nombre = nombre.toLowerCase()

    const perro = perritos.find(perro => perro.id === id)

    if (!perro) {
        throw new Error(`No existe ${id}`)
    }

    return perro

}

// Metodo para eliminar un perrito :'(
const remove = (id) => {

    const perro = findOne(id)
    const index = perritos.indexOf(perro)
    perritos.splice(index, 1)
    localStorage.setItem('perritos', JSON.stringify(perritos))
}


// Metodo para modificar un perrito
const update = (nombre, color) => {
    const perro = findOne(nombre)
    perro.color = color
}



// Paso 1
// crear un nuevo perro como instancia de la clase Perro
/* const perro1 = new Perro('Molo', 'marron', 1)
const perro2 = new Perro('Malena', 'negro', 25)
const perro3 = new Perro('Argos', 'negro', 20)
const perro4 = new Perro('Pacha', 'Marron', 15) */

// Paso 2
// agregar perro1 a la lista


/*
create(perro1)
create(perro2)
create(perro3)
create(perro4)
*/

// Paso 3
// Busco un perro por su nombre
// console.log(findOne('molo'))


// Eliminar un perro por su nombre
// remove('Argos')

// Actualizar el color de un perro 
// update('Argos', 'blanco')

// Obtener la lista completa de perros
console.log(getAll())


// Obtener elmentos del DOM
const listaPerros = document.getElementById('lista-perros')
const formPerro = document.getElementById('form-perro')
const inputNombrePerro = document.getElementById('input-nombre-perro')
const inputColorPerro = document.getElementById('input-color-perro')
const inputEdadPerro = document.getElementById('input-edad-perro')

// Agregar perritos a la lista de perros para el browser

const renderPerritosList = () => {
    for (let i = 0; i < perritos.length; i++) {
        let itemPerro = document.createElement('li')
        itemPerro.innerHTML = `El nombre del perro es ${perritos[i].nombre}
        <span style="cursor:pointer; color:red; font-size:30px" id="${i}">x</span>`
        itemPerro.onclick = () => {
            console.log(perritos[i])
            remove(perritos[i].nombre)
            document.location.reload();
        }
        listaPerros.appendChild(itemPerro)
    }
}

renderPerritosList()


// Escuchar el evento submit del formulario
formPerro.addEventListener('submit', (event) => {
    // event.preventDefault()
    // console.log(event)
    // console.log("aca tengo que agregar el perro")

    const id = inputIdPerro.value
    const nombre = inputNombrePerro.value
    const color = inputColorPerro.value
    const edad = inputEdadPerro.value

    const perro = new Perro(nombre, color, edad)

    create(perro)


})