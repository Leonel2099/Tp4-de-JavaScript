//Punto 9
class Animal{
  #edad;
  #nombre;
  constructor(nombre,edad){
    this.#nombre=nombre;
    this.#edad=edad;
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
  emitirSonido(){
  }
}
class Perro extends Animal{
  constructor(nombre,edad){
    super(nombre,edad);
  }
  emitirSonido(){
    document.write('Wau wau<br>');
  }
}
class Gato extends Animal{
  constructor(nombre, edad){
    super(nombre,edad);
  }
  emitirSonido(){
    document.write('Miau miau<br>');
  }
}
let animal1=new Perro('cody',7);
let animal2=new Gato('pelusa',3);
animal1.emitirSonido();
animal2.emitirSonido();