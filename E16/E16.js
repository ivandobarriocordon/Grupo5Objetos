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

const miembros = [
	new Miembro("Luis Martin", "Activo"),
	new Profesor("Ana Garcia", "Activo", "Desarrollo web"),
	new Profesor("Diego Lopez", "Activo", "Bases de datos"),
	new Alumno("Marta Ruiz", "Matriculada", 6),
	new Alumno("Iker Santos", "Matriculado", 4)
];

const cantidades = {
	Miembro: 0,
	Profesor: 0,
	Alumno: 0
};

miembros.forEach((objeto) => {
	let tipoConcreto;

	if (objeto instanceof Alumno) {
		tipoConcreto = "Alumno";
	} else if (objeto instanceof Profesor) {
		tipoConcreto = "Profesor";
	} else if (objeto instanceof Miembro) {
		tipoConcreto = "Miembro";
	} else {
		throw new TypeError("La coleccion contiene un objeto que no es un Miembro.");
	}

	cantidades[tipoConcreto]++;
	console.log(
		`${objeto.nombre}: clase concreta ${tipoConcreto}; instanceof Miembro: ${objeto instanceof Miembro}.`
	);
});

console.log("Cantidad por clase concreta:");
console.log(`Miembro: ${cantidades.Miembro}`);
console.log(`Profesor: ${cantidades.Profesor}`);
console.log(`Alumno: ${cantidades.Alumno}`);