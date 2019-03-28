class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    //No es necesario usar function 
    saludar(fn) {
        var { nombre, apellido } = this
        console.log(`Hola soy ${nombre} ${apellido}`)
        if(fn) fn(nombre, apellido, false)
    }
    soyMayor = () => this.edad > 18
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad)
    }

    saludar(fn) {
        var { nombre, apellido } = this
        console.log(`Hola soy ${nombre} ${apellido}`)
        if(fn) fn(nombre, apellido, true)
    }
    soyMenor = () => this.edad < 18
}

responderSaludo = (nombre, apellido, esDev) => {
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) console.log('Larga vida a los desarrolladores')
    else console.log('Ten siempre un desarrollador cerca')
}

var persona = new Persona('Manuel', 'Alférez', 21)
var julia = new Persona('Julia', 'Ramirez', 28)
var fran = new Desarrollador('Francisco', 'Ruiz', 48)

persona.saludar()
julia.saludar(responderSaludo)
fran.saludar(responderSaludo)