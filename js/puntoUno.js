//Punto 1
class Auto {

    constructor(color,marca,modelo){
        this.color=color;
        this.marca=marca;
        this.modelo=modelo;
    }

    encender(){
        console.log(`Auto Encendido`);
    }

    apagar(){
        console.log(`El auto se apago`);
    }
}

let auto1 = new Auto('rojo','Fiat','Mobi');
console.log(auto1);
auto1.encender()
auto1.apagar()