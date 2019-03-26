var person = {
    name: 'Manuel',
    age: '21'
}

/**
 * Función que detecta si es mayor de edad dependiendo del tipo de dato que sea edad y lanza un mensaje con la respuesta
 */
esMayorEdad = ({ age }) => {
    if (typeof (age) === 'string') {
        if (parseInt(age) > 18) return 'Es mayor de edad'
        else return 'No es mayor de edad'
    } else if (typeof (age) === 'number') {
        if (age > 18) return 'Es mayor de edad'
        else return 'No es mayor de edad'
    } else {
        console.log("Edad en formato incorrecto.")
    }
}

console.log(esMayorEdad(person))