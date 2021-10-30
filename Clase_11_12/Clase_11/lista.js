import { productos } from './productos.js'

for (const producto of productos) {
    $('#contenedor-lista-productos').append(
        `<div class="contenedor-producto">
            ${producto.nombre}
            $${producto.precio}
        </div>
        
        Cantidad: 
        <!-- // TODO: validación de stock -->
        <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>


        <button>Agregar</button>
        `
    )
}