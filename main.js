function heredaDe (hijo, padre){
    var fn = function () {}
    fn.prototype = padre.prototype
    hijo.prototype = new fn
    hijo.prototype.constructor = hijo
}

function Persona(nombre, apellido, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
}

//Hay que especificar que es una función, no sirve una arrow function
Persona.prototype.saludar = function () { console.log(`Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad}`) }

function Desarrollador (nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () { console.log(`Hola soy ${this.nombre} ${this.apellido} y soy desarrollador`)}

var persona = new Persona('Manuel', 'Alférez', 21)
var fran = new Desarrollador('Francisco', 'Ruiz', 48)

persona.saludar()
fran.saludar()