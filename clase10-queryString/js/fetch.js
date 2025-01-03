const URL = "https://randomuser.me/api";

let subtitulo = document.querySelector(".subtitulo");
let img = document.querySelector(".img");
let des = document.querySelector(".des");
let link = document.querySelector(".link");

fetch(URL)
.then(function(response) { // llega en formato JSON => UN TIPO DE DATO QUE JS PUEDA AMNIPULAR
    return response.json();
})
.then(function(data) {
    console.log(data);

    link.innerHTML = `<a href="./resultado.html?nombreUsuario=${data.results[0].name.first}">Ver</a>`
    
    subtitulo.innerText = `${data.results[0].name.first} ${data.results[0].name.last}`;

    img.src = data.results[0].picture.large;

    des.innerText = data.results[0].email;
})
.catch(function(error) {
    return console.log(error);
});

