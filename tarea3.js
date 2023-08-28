//Construir un arreglo con mínimo 2 objetos.
//Cada objeto debe tener otro objeto dentro.
//Para este arreglo, usar mínimo 3 3 métodos de JavaScript de los vistos en clase.

const Peliculas = [
    {nombre: 'Madagascar 3', vista: true, caracteristicas:{
        tipoPeli: 'Aventura', genero: 'Comedia'
    }},
    {nombre: 'Francotirador', vista: false, caracteristicas:{
        tipoPeli: 'Accion', genero: 'ficcion'
    }}
]

//Mostrar peliculas vistas

const peliVista = Peliculas.filter(pelicula => pelicula.vista === true)
console.log(peliVista);

//Ver cuales peliculas son de tipo accion

const accionMovies = Peliculas.every(peli => peli.caracteristicas.tipoPeli === "Accion")

//Cambiar el genero de Madagascar 3

Peliculas.forEach((peli) => {
    if (peli.nombre === "Madagascar 3") {
        peli.caracteristicas.genero = "terror"
    }
})
console.log(Peliculas);
