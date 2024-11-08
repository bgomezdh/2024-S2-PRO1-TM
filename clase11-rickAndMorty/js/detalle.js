let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idusuario = qsObj.get("idUsuario");

/* recuperar elementos del DOM */
let img = document.querySelector(".img");
let name = document.querySelector(".name");
let status = document.querySelector(".status");
let specie = document.querySelector(".specie");



let url = `https://rickandmortyapi.com/api/character/${idusuario}`;

fetch(url)
.then(function(data) {
    return data.json();
})
.then(function(results) {
    console.log(results);
    img.src = results.image;
    name.innerText = `Nombre: ${results.name}`;
    status.innerText = `status: ${results.status}`;
    specie.innerText = `specie: ${results.species}`;
})
.catch(function(err) {
    return console.log(err);
});

