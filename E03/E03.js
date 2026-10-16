const reserva = {
    origen : "Portugalete",
    destino : "Barcelona",
    nViajeros : 3,
    precioTotal : 90,
    mostrarResumen: function() {
        console.log(`Reserva de ${this.origen} a ${this.destino}`);
        console.log(`Número de viajeros: ${this.nViajeros}`);
        console.log(`Precio total: ${this.precioTotal}€`);
        console.log(`Precio por viajero: ${this.precioTotal / this.nViajeros}€`);
    }
}
reserva.mostrarResumen();

reserva.nViajeros = 5;
reserva.mostrarResumen();