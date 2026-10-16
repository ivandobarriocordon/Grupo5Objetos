const modulo = {
	nombre: "Programación",
	calificaciones: [7, 8.5, 6, 9],
	calcularMedia: function () {
		const suma = this.calificaciones.reduce((total, calificacion) => total + calificacion, 0);
		return suma / this.calificaciones.length;
	}
};

console.log(`Media de ${modulo.nombre}: ${modulo.calcularMedia().toFixed(2)}`);

modulo.calificaciones[0] = 10;
console.log(`Media de ${modulo.nombre} tras cambiar una calificación: ${modulo.calcularMedia().toFixed(2)}`);
