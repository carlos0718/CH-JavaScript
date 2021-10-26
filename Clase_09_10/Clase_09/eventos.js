const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

console.log(btn1);

// Primera opción 
btn1.addEventListener('click', () => {
    console.log('Hiciste Click opción 1');
});

// Segunda opción
btn2.onclick = () => {
    console.log('Hiciste click opción 2');
};

// Tercera opción 
// En el HTML


const form = document.getElementById('form');
const inputName = document.getElementById('input-name');
const checkBox = document.getElementById('check-box');

let gustaMate = false;

checkBox.onchange = () => {
    gustaMate = !gustaMate;
    console.log(`Gusta mate: ${gustaMate}`);
};


form.onsubmit = () => {
    event.preventDefault();
    let message;
    let name = inputName.value;

    //console.log(checkBox.checked);

    if (gustaMate) {
        message = `A ${name} le gusta el mate.`;
    } else {
        message = `A ${name} no le gusta el mate.`;
    };
    alert(message);
};

// Eventos del mouse

btn3.onmouseleave = () => {
    console.log('Saliste del elemento');
    btn3.className = 'btn-rojo';
    // className pisa y le agrega una clase
}

btn3.onmouseover = () => {
    console.log('Entraste al elemento');
    btn3.className = 'btn-azul';
}

inputName.onkeydown = () => {
    console.log(event.key);
    console.log('Presionaste una tecla');
}

inputName.onkeyup = () => {
    console.log('Levantaste el dedo');
}

inputName.onfocus = () => {
    console.log('On focus')
}

inputName.onblur = () => {
    console.log('Saliste');
}