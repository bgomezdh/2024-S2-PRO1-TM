/*  alert("Probando");
let nombreUsuario = prompt("Cual es tu nombre?");

alert(`Ahhhh tu nombre es ${nombreUsuario}`)

let mayorEdad = confirm("Usted es mayor de edad?");

alert(mayorEdad); */


/* condicionales */
let edad = 13;

if (edad > 18) {
    // si todo es afirmativo
    alert("es mayor de edad");
}else if (16 <= edad && edad <= 18) {
    alert("necesita un representante")
}else{
    // si todo es negativo
    alert("es menor de edad");
};

