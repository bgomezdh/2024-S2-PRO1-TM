// recuperar los elementos del DOM
let articulo = document.querySelector(".producto");
let form = document.querySelector("form");
let nombre = document.querySelector(".nombre");
let btn = document.querySelector(".btn");
let subtitulo = document.querySelector(".subtitulo");

// crear el addEventListener()
articulo.addEventListener("mouseover", function(e) {
   this.style.backgroundColor = "#a5a5a5";
   this.style.color = "#ffffff";
});

articulo.addEventListener("mouseout", function(e) {
    this.style.backgroundColor = "#fff";
    this.style.color = "#000";
 });

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let valorNombre = nombre.value;

   if (!valorNombre) {
    alert("Debes completar el campo nombre")
   } else {
   
    form.submit()

   }

})

btn.addEventListener("click", function(e) {
    subtitulo.innerText = "Juan carlos";
})