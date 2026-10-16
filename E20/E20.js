class Viaje {
	constructor(destino, fecha, precio, codigoReserva) {
		this.destino = destino;
		this.fecha = fecha;
		this.precio = precio;
		this.codigoReserva = codigoReserva;
	}

	resumen() {
		return `Viaje a ${this.destino} el ${this.fecha}. Precio: ${this.precio} EUR.`;
	}
}

class ViajeGrupo extends Viaje {
	constructor(destino, fecha, precio, codigoReserva, participantes) {
		super(destino, fecha, precio, codigoReserva);
		this.participantes = participantes;
	}

	resumen() {
		return `${super.resumen()} Viaje de grupo para ${this.participantes} participantes.`;
	}
}

const viajeParis = new Viaje("Paris", "2026-11-12", 320, "R-101");
const viajeRoma = new ViajeGrupo("Roma", "2026-12-03", 450, "R-102", 8);
const viajeTokio = new Viaje("Tokio", "2027-01-20", 1250, "R-103");
viajeTokio.observacion = "Reserva pendiente de confirmar";

const reservas = [viajeParis, viajeRoma, viajeTokio];

reservas.forEach((viaje) => {
	const tipo = viaje instanceof ViajeGrupo ? "ViajeGrupo" : "Viaje";
	console.log(`${tipo} | instanceof Viaje: ${viaje instanceof Viaje}`);
	console.log(viaje.resumen());
});

console.log("Propiedades propias de la reserva de grupo:");
console.log(Object.getOwnPropertyNames(viajeRoma));

console.log("Observacion de Tokio antes de eliminarla:", viajeTokio.observacion);
delete viajeTokio.observacion;
console.log("Observacion de Tokio después de eliminarla:", viajeTokio.observacion);
console.log("La reserva de Tokio sigue existiendo:", reservas.includes(viajeTokio));
console.log("Destino de Tokio después de eliminar la observacion:", viajeTokio.destino);