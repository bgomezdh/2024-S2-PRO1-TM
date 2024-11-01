const URL =  "https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre";
let listado = document.querySelector(".listado");

fetch(URL)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    let prov = data.provincias;
    let contenido = "";

    for (let i = 0; i < prov.length; i++) {
        console.log(prov[i].nombre); 
        contenido += `<li>${prov[i].nombre}</li>`      
    }

    listado.innerHTML = contenido;


})
.catch(function(err) {
    return console.log(err);
    ;
});

