//Punto 3
class Rectangulos {

  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  modificar(nuevoAlto,nuevoAncho) {
    this.alto = nuevoAlto;
    this.ancho = nuevoAncho;
    console.log(`Se han modificado sus parametros`);
  }

  calcularArea() {
    console.log(`El area es de ${this.alto * this.ancho} `);
  }
  
  calcularPerimetro() {
    console.log(`El perimetro es de ${2 * (this.alto + this.ancho)} `);
  }

  mostrarPropiedades() {
    console.log(`El alto mide: ${this.alto}`);
    console.log(`El ancho mide: ${this.ancho}`);
  }
}

let rectangulo1 = new Rectangulos(4,6);
rectangulo1.calcularArea();
rectangulo1.calcularPerimetro();
//Nuevos Valores
rectangulo1.modificar(3,6);
rectangulo1.calcularArea();
rectangulo1.calcularPerimetro();