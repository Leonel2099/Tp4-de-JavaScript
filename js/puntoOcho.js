//Punto 8
class Persona{
  #edad;
  #nombre;
  #profesion;
  constructor(nombre,edad,profesion){
    this.#nombre=nombre
    this.#edad=edad;
    this.#profesion=profesion
  }
  get obtenerNombre() {
    return this.#nombre;
  }
  set cambiarNombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get obtenerEdad() {
    return this.#edad;
  }
  set cambiaredad(nuevoEdad) {
    this.#edad = nuevoEdad;
  }
  get obtenerprofesion() {
    return this.#profesion;
  }
  set cambiarProfesion(nuevoProfesion) {
    this.#profesion = nuevoProfesion;
  }   
  saludar(){
    document.write(`${this.#nombre} esta saludando... Buenos dias <br>`);
  }
  despedirse(){
    document.write(`${this.#nombre} se esta despidiendo... Hasta luego <br>`);
  }
}

let persona1 = new Persona('Leonel',23,'Programador');
let persona2 = new Persona('Ezequiel',33,'Profesor');
persona1.saludar();
persona2.saludar();
persona1.despedirse();
persona2.despedirse();
