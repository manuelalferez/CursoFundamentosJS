class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    //No es necesario usar function 
    saludar() {
        console.log(`Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad}`)
    }
    soyMayor = () => this.edad > 18
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad)
    }

    saludar() {
        console.log(`Hola soy ${this.nombre} ${this.apellido} y soy desarrollador`)
    }
    soyMenor = () => this.edad < 18
}

var persona = new Persona('Manuel', 'Alférez', 21)
var fran = new Desarrollador('Francisco', 'Ruiz', 48)

persona.saludar()
fran.saludar()