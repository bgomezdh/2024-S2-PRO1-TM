let lista = document.querySelector(".lista");

let url = 'https://rickandmortyapi.com/api/character';

fetch(url)
.then(function(data) {
    return data.json();
})
.then(function(results) {
    console.log(results.results);
    let dato = results.results;
    let contenido = "";

    for (let i = 0; i < dato.length; i++) {
        contenido += `<article>
                            <img src="${dato[i].image}" alt="">
                            <p>Nombre: <a href="./detalle.html?idUsuario=${dato[i].id}">${dato[i].name}</a> </p>
                            <p>Status: ${dato[i].status}</p>
                      </article>`;

    }

    lista.innerHTML = contenido;

    
})
.catch(function(err) {
    return console.log(err);
});


