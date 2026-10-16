const calificaciones = [7, 8, 9];
const conjunto = new Set([7, 8, 9]);
const mapa = new Map([
	["Programación", 8],
	["Bases de datos", 9]
]);
const modulo = { nombre: "Programación" };

const comprobaciones = [
	{ expresion: "calificaciones instanceof Array", resultado: calificaciones instanceof Array, prediccion: true },
	{ expresion: "calificaciones instanceof Object", resultado: calificaciones instanceof Object, prediccion: true },
	{ expresion: "conjunto instanceof Set", resultado: conjunto instanceof Set, prediccion: true },
	{ expresion: "conjunto instanceof Object", resultado: conjunto instanceof Object, prediccion: false },
	{ expresion: "mapa instanceof Map", resultado: mapa instanceof Map, prediccion: true },
	{ expresion: "mapa instanceof Set", resultado: mapa instanceof Set, prediccion: false },
	{ expresion: "modulo instanceof Object", resultado: modulo instanceof Object, prediccion: true },
	{ expresion: "modulo instanceof Array", resultado: modulo instanceof Array, prediccion: false }
];

console.log("Predicciones (anotadas antes de ejecutar las comprobaciones):");
comprobaciones.forEach(({ expresion, prediccion }) => {
	console.log(`${expresion} -> ${prediccion}`);
});

console.log("\nResultados:");
comprobaciones.forEach(({ expresion, resultado, prediccion }) => {
	console.log(`${expresion} -> ${resultado}${resultado === prediccion ? "" : " (no coincide con la predicción)"}`);
});

console.log("\nLa predicción de conjunto instanceof Object no coincidió: Set hereda de Object, por eso el resultado es true.");
