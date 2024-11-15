let buscador = document.querySelector(".buscador");

/* buscador.addEventListener( "blur", function() {

    if (this.value.length < 3) {
        alert("Debes ingresar una palabra mayor a 2 caracteres")
    }else{
       alert(this.value)
    }
} ); */

buscador.addEventListener("input" , function name() {
    if (this.value.length < 3){
        buscador.style.color = "red";
    } else{
        buscador.style.color = "green";
    }
} )