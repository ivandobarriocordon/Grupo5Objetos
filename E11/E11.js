class Viaje {
	constructor(destino, duracion, precioTotal, numeroPersonas) {
		this.destino = destino;
		this.duracion = duracion;
		this.precioTotal = precioTotal;
		this.numeroPersonas = numeroPersonas;
	}

	calcularPrecioPorPersona() {
		return this.precioTotal / this.numeroPersonas;
	}

	mostrarResumen() {
		return `Viaje a ${this.destino}: ${this.duracion} dias, ${this.numeroPersonas} personas, precio total ${this.precioTotal.toFixed(2)} EUR.`;
	}
}

const viajeLisboa = new Viaje("Lisboa", 4, 1200, 2);
const viajeParis = new Viaje("Paris", 3, 900, 3);

console.log(viajeLisboa.mostrarResumen());
console.log(`Precio por persona: ${viajeLisboa.calcularPrecioPorPersona().toFixed(2)} EUR`);

console.log(viajeParis.mostrarResumen());
console.log(`Precio por persona: ${viajeParis.calcularPrecioPorPersona().toFixed(2)} EUR`);

viajeLisboa.numeroPersonas = 4;
console.log("\nDespues de modificar el numero de personas:");
console.log(viajeLisboa.mostrarResumen());
console.log(`Precio por persona: ${viajeLisboa.calcularPrecioPorPersona().toFixed(2)} EUR`);