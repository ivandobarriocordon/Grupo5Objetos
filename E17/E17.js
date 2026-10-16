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

const producto = new Producto("Teclado mecanico", 79.99, 15);
producto.proveedor = "TecnoDistribucion";

const nombresConForIn = [];
const valoresConForIn = [];

for (const propiedad in producto) {
	nombresConForIn.push(propiedad);
	valoresConForIn.push(producto[propiedad]);
}

console.log("Nombres de propiedades con for...in:");
console.log(nombresConForIn);

console.log("Valores de esas propiedades, en el mismo orden:");
console.log(valoresConForIn);

const propiedadesPropias = Object.getOwnPropertyNames(producto);
console.log("Nombres de propiedades propias:");
console.log(propiedadesPropias);

console.log(
	`El metodo vender esta en Producto.prototype, no entre las propiedades propias: ${
		!propiedadesPropias.includes("vender")
	}.`
);