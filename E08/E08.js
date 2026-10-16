const articulo = {
	nombre: "Auriculares inalambricos",
	categoria: "Electronica",
	precio: 49.99,
	unidades: 12,
	describir: function () {
		return `${this.nombre} (${this.categoria}): ${this.precio.toFixed(2)} EUR, ${this.unidades} unidades disponibles.`;
	}
};

const campos = ["nombre", "categoria", "precio", "unidades"];
campos.forEach((campo) => {
	console.log(`${campo}: ${articulo[campo]}`);
});

const nombrePropiedad = "marca";
articulo[nombrePropiedad] = "Sonora";
console.log(`Nueva propiedad ${nombrePropiedad}: ${articulo[nombrePropiedad]}`);

console.log("Antes de cambiar el precio:", articulo.describir());
articulo.precio = 59.99;
console.log("Despues de cambiar el precio:", articulo.describir());
