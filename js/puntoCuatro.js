//Punto4
class Producto{

  constructor(codigo,nombre,precio){
    this.codigo=codigo;
    this.nombre=nombre;
    this.precio=precio;
  }

  imprimeDatos(){
    document.write(`Codigo: ${this.codigo}, `);
    document.write(`Nombre: ${this.nombre}, `);
    document.write(`Precio: ${this.precio}$ <br>`);
  }
}
let productos = [];
let azucar = new Producto(1,'azucar',100);
let avena = new Producto(2,'avena',230);
let cereal = new Producto(3,'cereal',150);
productos.push(azucar);
productos.push(avena);
productos.push(cereal);
console.log(productos)
azucar.imprimeDatos();
avena.imprimeDatos();
cereal.imprimeDatos();