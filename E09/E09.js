class Libro {
	constructor(titulo, autor, numeroPaginas) {
		this.titulo = titulo;
		this.autor = autor;
		this.numeroPaginas = numeroPaginas;
	}

	describir() {
		return `"${this.titulo}" fue escrito por ${this.autor} y tiene ${this.numeroPaginas} paginas.`;
	}
}

const libro = new Libro("La sombra del viento", "Carlos Ruiz Zafon", 576);

console.log(libro.describir());
console.log("Titulo consultado:", libro.titulo);
