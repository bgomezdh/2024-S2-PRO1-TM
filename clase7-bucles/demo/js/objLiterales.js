let autos = {
    lista : [
        {
            marca: "Toyota",
            color: "verde",
            annio: 20022,
        },
        {
            marca: "Audi",
            color: "azul",
            annio: 2002,
        },
        {
            marca: "Chevrolet",
            color: "rojo",
            annio: 2023
        },
        {
            marca: "Ford",
            color: "blanco",
            annio: 2020
        }
    ],
    describirse: function(num) {
        return     `Soy el auto ${autos.lista[num].marca} 
                    y soy de color ${this.lista[num].color} 
                    del año ${this.lista[num].annio}`;
    },
    otroObj: {
        saludos: "Ford se despide",
        marca: "Toyota"
    }
}


console.log(autos.describirse(3));

console.log(autos)
