//Punto4
class Producto {
  #codigo;
  #nombre;
  #precio;
  constructor(codigo, nombre, precio) {
    this.#codigo = codigo;
    this.#nombre = nombre;
    this.#precio = precio;
  }
  get codigo(){
    return this.#codigo;
  }
  set codigo(nuevoCodigo){
    this.#codigo = nuevoCodigo;
  }
  get nombre(){
    return this.#nombre;
  }
  set nombre(nuevoNombre){
    this.#nombre = nuevoNombre;
  }
  get precio(){
    return this.#precio;
  }
  set precio(nuevoPrecio){
    this.#precio = nuevoPrecio;
  }
  imprimeDatos(listaProductos) {
    for (let key in listaProductos) {
      document.write(`Codigo: ${listaProductos[key].codigo}, `);
      document.write(`Nombre: ${listaProductos[key].nombre}, `);
      document.write(`Precio: ${listaProductos[key].precio}$ <br>`);
    }
  }
}
let productos = [];
let producto1 = new Producto(1, "azucar", 100);
let producto2 = new Producto(2, "avena", 230);
let producto3 = new Producto(3, "cereal", 150);
productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
producto1.imprimeDatos(productos);
