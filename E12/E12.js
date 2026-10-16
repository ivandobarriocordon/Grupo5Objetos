class Telefono {
	constructor(cpu, ram, almacenamiento, ancho, alto, numeroCamaras) {
		this.cpu = cpu;
		this.ram = ram;
		this.almacenamiento = almacenamiento;
		this.ancho = ancho;
		this.alto = alto;
		this.numeroCamaras = numeroCamaras;
	}

	toString() {
		return `CPU: ${this.cpu} | RAM: ${this.ram} GB | ` +
			`Almacenamiento: ${this.almacenamiento} GB | ` +
			`Dimensiones: ${this.ancho} cm × ${this.alto} cm | ` +
			`Cámaras: ${this.numeroCamaras}`;
	}
}

const moviles = [
	new Telefono("Snapdragon 8 Gen 2", 8, 128, 7.5, 15, 3),
	new Telefono("Dimensity 9000", 12, 256, 7.2, 15.5, 4),
	new Telefono("Apple A16 Bionic", 6, 512, 7.1, 14.8, 2)
];

moviles.forEach((movil) => console.log(movil.toString()));

const telefonoConMasRAM = moviles.reduce((mayor, movil) =>
	movil.ram > mayor.ram ? movil : mayor
);
console.log(`Teléfono con más RAM: ${telefonoConMasRAM.toString()}`);
