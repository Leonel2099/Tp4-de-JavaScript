//Punto 10
class Aeropuerto {
  #nombreAeropuerto;
  #listaAviones;
  constructor(nombreAeropuerto, listaAviones) {
    this.#nombreAeropuerto = nombreAeropuerto;
    this.#listaAviones = listaAviones;
  }
  get nombreAeropuerto() {
    return this.#nombreAeropuerto;
  }
  set nombreAeropuerto(nuevoNombreAeropuerto) {
    this.#nombreAeropuerto = nuevoNombreAeropuerto;
  }
  get listaAviones() {
    return this.#listaAviones;
  }
  set listaAviones(nuevaListaAviones) {
    this.#listaAviones = nuevaListaAviones;
  }
  agregarAvion(avion) {
    this.#listaAviones.push(avion);
  }
  buscarAvion(nombreAvion) {
    const objeto = this.#listaAviones.find((elemento) => {
      if (elemento.nombre === nombreAvion) {
        return true;
      }
      return false;
    });
    if (objeto) {
      document.write(`Informacion<br> Nombre : ${objeto.nombre}<br>`);
      document.write(`Capacidad : ${objeto.capacida}<br>`);
      document.write(`Destino: ${objeto.destino}<br>`);
      document.write(`Lista de pasajeros: ${objeto.listaPasajeros}<br>`);
    } else {
      document.write(`No se encotro el nombre del avion<br>`);
    }
  }
}
class Avion {
  #nombre;
  #capacidad;
  #destino;
  #listaPasajeros;
  constructor(nombre, capacida, destino, listaPasajeros) {
    this.#nombre = nombre;
    this.#capacidad = capacida;
    this.#destino = destino;
    this.#listaPasajeros = listaPasajeros;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get capacida() {
    return this.#capacidad;
  }
  set capacida(nuevaCapacidad) {
    this.#capacidad = nuevaCapacidad;
  }
  get destino() {
    return this.#destino;
  }
  set destino(nuevoDestino) {
    this.#destino = nuevoDestino;
  }
  get listaPasajeros() {
    return this.#listaPasajeros;
  }
  set listaPasajeros(nuevaListaPasajeros) {
    this.#listaPasajeros = nuevaListaPasajeros;
  }
  abordar(pasajero = "pasajero") {
    if (this.#capacidad === 0) {
      document.write(`Capacidad llena`);
    } else {
      this.#capacidad --;
      this.#listaPasajeros.push(pasajero);
    }
  }
}
let aeropueto1 = new Aeropuerto("Aeropuerto Internacional", new Array());
let avion1 = new Avion(`La reina de los cielos`, 218, "Francia", new Array());
let avion2 = new Avion("Chancho", 132, "Qatar", new Array());
let avion3 = new Avion("Maddog", 324, "Argentina", new Array());
aeropueto1.agregarAvion(avion1);
aeropueto1.agregarAvion(avion2);
aeropueto1.agregarAvion(avion3);
