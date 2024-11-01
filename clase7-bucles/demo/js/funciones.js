console.log(cafetera(10, 50));

/* funciones A - DECLARADAS*/
function cafetera(agua, cafeGranos){
    let cafe = agua + cafeGranos;
    return `Hoy tienes tu cafecito listo al ${cafe}%`;
};



let resultado = cafetera(20,20);

console.log(resultado);



/* funciones B - EXPRESADAS*/
let saludar = function(nombre, apellido) {
    
    return `Holaaa querido ${nombre} ${apellido}`;
}

console.log(saludar("carlos", "Andrade"));















