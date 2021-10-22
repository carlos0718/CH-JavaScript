/* PRACTICA AFTER */

const body = document.body
const dinero = 500;
let color = 'green';
body.append('Hola', ' Muchos');
const divAMeter = document.createElement('div');
body.append(divAMeter);

divAMeter.innerText = "Hola Mundo";

divAMeter.innerHTML = '<b>Hola mundo</b>'; // Falla de seguridad

const grueso = document.createElement('b');
grueso.innerText = 'Usted tiene fondo suficiente';
// 
if (dinero < 0) {
    color = 'red';
} else {
    color = 'green'
}

grueso.style.color = color
divAMeter.append(grueso);

// divAMeter.style.display = "";

// Lo sobre escribe 
/* divAMeter.textContent = "Texto content" */

let padre = document.getElementById("personas");

let personas = ["Manuel", "Anto", "Maxi"];

for (const persona of personas) {
    let li = document.createElement("li");
    li.innerHTML = persona
    padre.appendChild(li);
};