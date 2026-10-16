const producto = {
	precio: 49.99,
	unidades: 12,
	descuento: 15
};

console.log("Objeto antes de eliminar el descuento:", producto);
console.log("Descuento inicial:", producto.descuento);

delete producto.descuento;

console.log("Descuento después de eliminarlo:", producto.descuento);
console.log("Precio después de eliminarlo:", producto.precio);
console.log("Unidades después de eliminarlo:", producto.unidades);
console.log("Objeto después de eliminar el descuento:", producto);