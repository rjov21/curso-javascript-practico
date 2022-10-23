const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const form = document.querySelector('#formulario');
const input2 = document.querySelector('#calculo2');
const boton = document.querySelector('#btn1');
const resultado = document.querySelector('#result');

form.addEventListener('submit', calcularformulario);

function calcularformulario(event){
    console.log({event})
    event.preventDefault();
    const resulta = input1.value + input2.value
    resultado.innerText = "Resultado es: " + resulta;
}