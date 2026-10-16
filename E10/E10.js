class Producto {
	constructor(nombre, precio, unidadesDisponibles) {
		this.nombre = nombre;
		this.precio = precio;
		this.unidadesDisponibles = unidadesDisponibles;
	}

	vender(cantidadVendida) {
		this.unidadesDisponibles -= cantidadVendida;
	}
}

const teclado = new Producto("Teclado mecanico", 79.99, 15);
const raton = new Producto("Raton inalambrico", 34.99, 8);

teclado.vender(3);

console.log(`Existencias de ${teclado.nombre}: ${teclado.unidadesDisponibles}`);
console.log(`Existencias de ${raton.nombre}: ${raton.unidadesDisponibles}`);
