
function game(opcion) {
    let seleccion = ["piedra", "papel", "tijeras"]
    let value_random = Math.floor(Math.random() * 3)
    let seleccion_random = seleccion[value_random]

    if (opcion != seleccion_random) {
        if ((opcion == "piedra" && seleccion_random == "tijeras") ||
            (opcion == "papel" && seleccion_random == "tijeras") ||
            (opcion == "tijeras" && seleccion_random == "papel")) {
                console.log("Usuario: " + opcion + ", PC: " + seleccion_random + ", --- GANASTE")
        }
        else
        {
            console.log("Usuario: " + opcion + ", PC: " + seleccion_random + ", --- PERDISTE")
        }

    }
    else {
        console.log("Usuario: " + opcion + ", PC: " + seleccion_random + ", --- EMPATE")
    }
}



var opcion = prompt("Vamos a jugar, escoge entre piedra, papel o tijeras")
game(opcion)