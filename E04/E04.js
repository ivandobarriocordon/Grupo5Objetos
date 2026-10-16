let reserva = {
	origen: "Bilbao",
	destino: "Madrid",
	viajeros: 2,
	precioTotal: 180,
	mostrarResumen: function () {
		console.log(`Reserva: ${this.origen} - ${this.destino}`);
		console.log(`Viajeros: ${this.viajeros}`);
		console.log(`Precio total: ${this.precioTotal} euros`);
	}
};

const segundaReferencia = reserva;
segundaReferencia.destino = "Barcelona";

console.log("Destino consultado desde la primera variable:", reserva.destino);
console.log("Ambas variables apuntan al mismo objeto, por eso el destino es Barcelona.");

reserva = null;
segundaReferencia.mostrarResumen();
