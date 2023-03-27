//Punto 6
const mayorCantiadPaginas = (numerosPaginas1,numeroPaginas2,nombre1,nombre2) => {
  numerosPaginas1 > numeroPaginas2 ? document.write(`El libro ${nombre1} tiene mas paginas que el libro ${nombre2}`): document.write(`El libro ${nombre2} tiene mas paginas que el libro ${nombre1}`);
} 
class Libro {
  constructor(isbn, titulo, autor, numeroPaginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numeroPaginas = numeroPaginas;
  }

  set actualizarIsbn(nuevoIsbn) {
    this.isbn = nuevoIsbn;
  }
  get obtenerIsbn() {
    return this.isbn;
  }

  set actualizarAutor(nuevoAutor) {
    this.autor = nuevoAutor;
  }
  get obtenerAutor() {
    return this.autor;
  }

  set actualizarTitulo(nuevoTitulo) {
    this.titulo = nuevoTitulo;
  }
  get obtenerTitulo() {
    return this.titulo;
  }

  set actualizarNumeroPaginas(nuevoNumeroPaginas) {
    this.numeroPaginas = nuevoNumeroPaginas;
  }
  get obtenerNumeroPaginas() {
    return this.numeroPaginas;
  }

  mostrarLibro(){
    document.write(`El libro '${this.titulo}' con ISBN ${this.isbn} creador por el autor ${this.autor}, tiene ${this.numeroPaginas} paginas <br>`);
  }
}

let libro1 = new Libro(9788409273683,'Play historia','Marc Rollan',1008);
let libro2 = new Libro(9781302900823,'The Amazing Spider-Man','Stan Lee',1088);
libro1.mostrarLibro();
libro2.mostrarLibro();
mayorCantiadPaginas(libro1.numeroPaginas,libro2.numeroPaginas,libro1.titulo,libro2.titulo);

