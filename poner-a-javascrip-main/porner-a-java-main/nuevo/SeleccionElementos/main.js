'use strict';
//Seleccionar por id
//const parrafo1 = document.getElementById("parrafo1");

//console.log(parrafo1);

//Selección por atributo name

let nameParrafo = document.getElementById("parra2")
//console.log(nameParrafo);

//Seleción por class
let elemento = document.getElementById("parrafo");
//console.log(elemento);
//Query selector por id #
const parrafo1 = document.querySelector("#parrafo1");
const elementEtiqueta = document.querySelector("h1");
const elementClass = document.querySelector(".ejemplo");
//console.log(parrafo1);

//Seleccionar todos los elementos p
const todosP = document.querySelectorAll("p");
//console.log(todosP);

/**function print(){
    const valor = document.getElementById("edad").value;
    alert("La edad es: "+valor);
}*/

const print = () => {
    const valor = document.getElementById("edad").value;
    alert("La edad es: "+valor);
}