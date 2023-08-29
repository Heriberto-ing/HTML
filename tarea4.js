/*Crear dos clases con mínimo dos métodos por clase, una de las clases hereda a la otra.
-Las clases deben recibir objetos en su constructor.
-Los objetos construidos deben poseer dentro de sus propiedades otro objeto.
-Mostrar resultados de hacer uso de las clases y los objetos creados.*/

//clase padre
class Animal{
    constructor(color, especie, sonido, habitat, edad){
        this.color = color;
        this.especie= especie;
        this.sonido = sonido;
        this.habitat = habitat;
        this.edad = edad;
    }

    moverse(tipoMovimiento){
        console.log(`El animal se mueve ${tipoMovimiento}`);
    }

    determinarEspecie(){
        return this.especie;
    }
    sonidoCaracteristico(){
        return this.sonido;
    }
    dondeSeEncuentra(){
        return this.habitat;
    }
    edad(){
        return this.edad;
    }
}

class gato extends Animal{
    constructor (raza , color, sonido, edad) {
        this.raza = raza;
        this.color = color;
        this.sonido = sonido;
        this.edad = edad;
        super(this.raza,this.color,this.sonido,this.edad, '')
    }
    maullar(){
        return this.sonido;
    }

    lamer(){
        console.log('He lamido');
    }
}

const labrador = new Gato('Siames','Gris','meow','adulto');
labrador.lamer();
console.log(Siames.sonidoCaracteristico()); //regresa en console 'meow'

//clases que reciben objetos
//clase padre
class Musica{
    constructor(info){
        this.fechaLanzamiento = info.fechaLanzamiento;
        this.artista = info.artista;
        this.genero = info.genero;
        this.titulo= info.titulo;
    }
    reproducir(){
        console.log(`Se está reproduciendo ${this.titulo} del artista ${this.artista}` )

    }

    pausar(){
        return `Se ha mpausado ${this.titulo} del artista ${this.artista}`;
    }
}

const Informacion = {
    fechaLanzamiento: 2018,
    artista: `Paulo Londra`,
    genero: `Reggaeton`,
    titulo: `Tal vez`,
}
//objeto
const reggaeton = new Musica(informacion);
reggaeton.reproducir();

const Reggaeton = new Musica(
    {
        fechaLanzamiento: 2018,
        artista: `Paulo Londra`,
        genero: `Reggaeton`,
        titulo: `Tal vez`,
    }
);

reggaeton.reproducir();

