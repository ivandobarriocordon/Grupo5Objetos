const perfil = new Object();

perfil.nombreUsuario = "AneGamer";
perfil.nivel = 5;
perfil.puntos = 1200;
perfil.aumentarPuntos = function (puntosNuevos) {
	this.puntos += puntosNuevos;
};

perfil.aumentarPuntos(150);
perfil.aumentarPuntos(300);

console.log("Estado final del perfil:", perfil);
console.log("Puntos acumulados:", perfil.puntos);
