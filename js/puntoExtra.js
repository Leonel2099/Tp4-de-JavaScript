const mostrarElecion = opcion =>{
    if(opcion === 1){
        return "✊🏽"
    }else if (opcion === 2){
        return "✋🏽"
    }else if (opcion === 3){
        return "✌🏽"
    }else{
        return 0
    }
}

const eleccion = (opcion1,opcion2) =>{
    if(opcion1 === 1){
        if(opcion2 === 2){
            alert(`Gano la PC \n Jugador:${mostrarElecion(opcion1)}\n Pc:${mostrarElecion(opcion2)}`);
        }else if (opcion2 === 3){
            alert(`Ganaste \n Jugador:${mostrarElecion(opcion1)}\n Pc:${mostrarElecion(opcion2)}`);
        }else {
            alert(`Empate \n Jugador:${mostrarElecion(opcion1)}\n Pc:${mostrarElecion(opcion2)}`);
        }
    }else if (opcion1 === 2){
        if(opcion2 === 1){
            alert(`Ganaste \n Jugador:${mostrarElecion(opcion1)}\n Pc:${mostrarElecion(opcion2)}`);
        }else if (opcion2 === 3){
            alert(`Gano la PC \n Jugador:${mostrarElecion(opcion1)}\n Pc:${mostrarElecion(opcion2)}`);
        }else {
            alert(`Empate \n Jugador:${mostrarElecion(opcion1)}\n Pc:${mostrarElecion(opcion2)}`);
        }
    }else if (opcion1 === 3){
        if(opcion2 === 1){
            alert(`Gano la PC \n Jugador:${mostrarElecion(opcion1)}\n Pc:${mostrarElecion(opcion2)}`);
        }else if (opcion2 === 2){
            alert(`Ganaste \n Jugador:${mostrarElecion(opcion1)}\n Pc:${mostrarElecion(opcion2)}`);
        }else {
            alert(`Empate \n Jugador:${mostrarElecion(opcion1)}\n Pc:${mostrarElecion(opcion2)}`);
        }
    }else{
        alert("ERROR 404");
    }
}

const texto = "Quiere seguir jugando ? \ Aceptar / Cancelar";
do{
    let opcionJugador1 = parseInt(prompt("Eliga una opcion \n 1:✊🏽 \n 2:✋🏽 \n 3:✌🏽"));
    let opcionPc = parseInt(Math.floor(Math.random() * (3 - 1 + 1) + 1));
    eleccion(opcionJugador1,opcionPc);
    while(opcionJugador1 <= 0 || opcionJugador1 > 3){
        alert("El jugador no seleciono ninguna opcion")
        opcionJugador1 = parseInt(prompt("Eliga una opcion \n 1:✊🏽 \n 2:✋🏽 \n 3:✌🏽"));
        eleccion(opcionJugador1,opcionPc);
    }
    console.log(`Jugador:${mostrarElecion(opcionJugador1)}\n Pc:${mostrarElecion(opcionPc)}`);
}while(confirm(texto));