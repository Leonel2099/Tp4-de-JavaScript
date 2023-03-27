//Punto 2
class Cuenta {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  ingresar(valorIngreso) {
    this.saldo += valorIngreso;
  }

  extraer(valorExtracion) {
    if (this.saldo > 0) {
      this.saldo -= valorExtracion;
    } else {
        console.log("No posee esa cantida de dinero");
    }
  }

  informar() {
    console.log(`Tu saldo disponible es de : ${this.saldo}`);
  }
}

let cuenta1 = new Cuenta('Alex',0);
//Primera extracion fallida no pose dinero
cuenta1.extraer(100);
console.log(cuenta1);
cuenta1.informar();
//Se ingreso dinero
cuenta1.ingresar (400);
console.log(cuenta1);
cuenta1.informar();
//Segunda extracion exitosa
cuenta1.extraer(100);
cuenta1.informar();
console.log(cuenta1);
