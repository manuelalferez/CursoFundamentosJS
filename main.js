var nombre = 'Manuel', apellidos = 'Alférez Ruiz'

var nombreEnMayusculas = nombre.toUpperCase(nombre)
var apellidosEnMinuscula = apellidos.toLowerCase(apellidos)

var primeraLetraNombre = nombre.charAt(0)
var str = nombre.substr(1, 2) //Nos saca una sub string (posición inicial, longitud)
var longitudNombre = nombre.length

//Reto: mostrar la última letra del apellido 
var reto = apellidos.charAt(apellidos.length - 1)

console.log(reto)
