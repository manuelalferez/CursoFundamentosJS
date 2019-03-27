function Persona(nombre, apellido, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
}

//Hay que especificar que es una función, no sirve una arrow function
Persona.prototype.saludar = function () { console.log(`Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad}`) }

var persona = new Persona('Manuel', 'Alférez', 21)
var fran = new Persona('Francisco', 'Ruiz', 48)

persona.saludar()
fran.saludar()