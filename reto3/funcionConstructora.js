
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var cantidadAutos = parseInt(prompt("Cantidad de autos a ingresar: "))
var autos = []

while (cantidadAutos > 0) {
    var marca = prompt("Ingresa la marca del auto: ")
    var modelo = prompt("Ingresa el modelo del auto: ")
    var annio = prompt("Ingresa el año del auto: ")
    autos.push(new auto(marca, modelo, annio))
    cantidadAutos--
}

for (auto of autos) {
    console.log(auto)
}