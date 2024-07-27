//DESESTRUCTURAMOS UN OBJETO
import { barcelona, roma, paris, londres } from "./ciudades.js";

//OBTENER LOS DOCUMENTOS DEL DOM (document objet model)

let enlaces = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");

// console.log(enlaces)
//agregar un evento click a cada enlace

enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    //remover la clase active de todos los enlaces
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });

    //agregar la clase active al anlace actual
    this.classList.add("active");
    //obtener el contenido correspondinete segun el enlace
    let contenido = obtenerContenido(this.textContent);

    //mostrar el contenido en el DOM
    tituloElemento.innerHTML = contenido.titulo;
    subtituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
  });
});

//funcion para traer la informacion correcta desde ciudades.js.
function obtenerContenido(enlace) {
  let contenido = {
    'Barcelona': barcelona,
    'Roma': roma,
    'París': paris,
    'Londres': londres,
  };
  return contenido[enlace];
}
