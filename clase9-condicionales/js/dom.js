/* console.log(window);

let cerrar = confirm("quieres cerrar la pesaña?");

if (cerrar) {
    window.close();
}
 */


let titulo      = document.querySelector(".titulo");
let subtitulo   = document.querySelector(".subtitulo");
let img         = document.querySelector(".img");
let des         = document.querySelector(".des");
let span        = document.querySelector("span");
let btn         = document.querySelector(".btn");

// todas las etiquetas p
let etiquetasP = document.querySelectorAll("p");

console.log(etiquetasP);




titulo.innerHTML = "DOM y <i>Condicionales</i>";
subtitulo.innerText = "Laptop";
img.src = "./img/producto.svg";
des.style.fontSize = "30px";
des.style.textAlign = "center";
span.style.backgroundColor = "green";

etiquetasP[0].style.color = "orange";
etiquetasP[1].style.color = "red";

btn.style.backgroundColor = "#9ab6ff"; 
btn.style.color = "#000"; 