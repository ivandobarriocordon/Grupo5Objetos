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

class Alumno extends Miembro {
	constructor(nombre, estadoVinculacion, numeroAsignaturas) {
		super(nombre, estadoVinculacion);
		this.numeroAsignaturas = numeroAsignaturas;
	}

	presentarse() {
		return `${super.presentarse()} Numero de asignaturas: ${this.numeroAsignaturas}.`;
	}
}

const miembro = new Miembro("Luis Martin", "Activo");
const profesor = new Profesor("Ana Garcia", "Activo", "Desarrollo web");
const alumno = new Alumno("Marta Ruiz", "Matriculada", 6);

console.log(miembro.presentarse());
console.log(profesor.presentarse());
console.log(alumno.presentarse());