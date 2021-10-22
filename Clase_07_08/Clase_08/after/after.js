/* PRACTICA AFTER */

const body = document.body
body.append('Hola', ' Muchos');
const divAMeter = document.createElement('div');
body.append(divAMeter);

divAMeter.innerText = "Hola Mundo";

divAMeter.innerHTML = '<b>Hola mundo</b>'; // Falla de seguridad

const grueso = document.createElement('b');
grueso.innerText = ' Prueba';
divAMeter.append(grueso);

// divAMeter.style.display = "";

// Lo sobre escribe 
/* divAMeter.textContent = "Texto content" */