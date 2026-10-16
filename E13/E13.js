class Miembro {
	constructor(nombre, estadoVinculacion) {
		this.nombre = nombre;
		this.estadoVinculacion = estadoVinculacion;
	}

	presentarse() {
		return `Miembro: ${this.nombre}. Estado de vinculacion: ${this.estadoVinculacion}.`;
	}
}

class Profesor extends Miembro {
	constructor(nombre, estadoVinculacion, especialidad) {
		super(nombre, estadoVinculacion);
		this.especialidad = especialidad;
	}
}

const profesor = new Profesor("Ana Garcia", "Activo", "Desarrollo web");

console.log(`Propiedad heredada: ${profesor.nombre}`);
console.log(`Metodo heredado: ${profesor.presentarse()}`);
console.log(`Especialidad: ${profesor.especialidad}`);
