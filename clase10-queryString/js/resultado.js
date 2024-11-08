let qs = location.search;
let qsObj = new URLSearchParams(qs);
let usuario = qsObj.get("nombreUsuario");
let prov = qsObj.get("prov");
let buscador = qsObj.get("buscador");

let nombre = document.querySelector(".nombre");
let provincia = document.querySelector(".prov");

nombre.innerText = usuario;
provincia.innerText = prov;
provincia.innerText = buscador;