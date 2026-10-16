class Notificacion {
	constructor(destinatario, mensaje) {
		this.destinatario = destinatario;
		this.mensaje = mensaje;
	}

	enviar() {
		console.log(`Notificacion para ${this.destinatario}: ${this.mensaje}`);
	}
}

class Correo extends Notificacion {
	enviar() {
		console.log(`Enviando correo electronico a ${this.destinatario}: ${this.mensaje}`);
	}
}

class SMS extends Notificacion {
	enviar() {
		console.log(`Enviando SMS al numero ${this.destinatario}: ${this.mensaje}`);
	}
}

const notificaciones = [
	new Correo("lucia@example.com", "La reunion empieza a las 10:00."),
	new SMS("+34 600 123 456", "Tu pedido ya esta en camino.")
];

notificaciones.forEach((notificacion) => notificacion.enviar());