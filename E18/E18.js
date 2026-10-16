class Miembro {
	constructor(nombre, estadoVinculacion) {
		this.nombre = nombre;
		this.estadoVinculacion = estadoVinculacion;
	}

	presentarse() {
		return `Miembro: ${this.nombre}. Estado de vinculacion: ${this.estadoVinculacion}.`;
	}
}

Object.defineProperty(Miembro.prototype, "centro", {
	value: "Arangoya",
	enumerable: true,
	configurable: true
});

const miembro1 = new Miembro("Luis Martin", "Activo");
const miembro2 = new Miembro("Marta Ruiz", "Matriculada");

console.log(`Centro de ${miembro1.nombre}: ${miembro1.centro}`);
console.log(`Centro de ${miembro2.nombre}: ${miembro2.centro}`);

console.log("Propiedades recorridas con for...in:");
for (const propiedad in miembro1) {
	console.log(`${propiedad}: ${miembro1[propiedad]}`);
}

console.log("Propiedades propias de miembro1:");
console.log(Object.getOwnPropertyNames(miembro1));