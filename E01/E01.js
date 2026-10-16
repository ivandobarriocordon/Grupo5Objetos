const pelicula = {
 titulo : "La llegada",
 director: "Denis Villeneuve",
 anio: 2016,
 duracion: 116,
 mostrar: function(){
    console.log(this.titulo);
    console.log(this["director"]);
    console.log(this.duracion + " minutos");
 }

}
pelicula.mostrar();
pelicula.duracion = 119;
console.log("Despues del cambio: ", pelicula.duracion + " minutos");
