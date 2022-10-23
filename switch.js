

function juego(player1,player2) {
    switch (player1,player2) {
            case player1 === "tijeras" && player2 === "piedra":
                console.log("Ganaste");
                break;
            case player2 === "tijeras" && player1 === "papel":
                console.log("Perdiste");
                break;
            case player2 === "papel" && player1 === "piedra":
                console.log("Perdiste");
                break;
            case player2 === "papel" && player1 === "tijeras":
                console.log("Ganaste");
                break;
            case player2 === "piedra" && player1 === "papel":
                console.log("Ganaste");
                break;
            case player2 === "piedra" && player1 === "tijeras":
                console.log("perdiste");
                break;
            default:
                console.log("Empate")
                break;
    }
}

