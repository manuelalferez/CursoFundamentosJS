var person = {
    name: 'Manuel',
    age: 21
}

const MAYORIA_EDAD = 18;

/* esMayorEdad = ({ age }) => {
    return age > MAYORIA_EDAD;
}
 */

// Si lo único que hace la función es retornar un valor se puede eliminar el return y los corchetes
esMayorEdad = ({ age }) =>   age > MAYORIA_EDAD


imprimirMayorEdad = (person) => {
    console.log(`${person.name} es ${esMayorEdad(person) ? 'mayor' : 'menor'} de edad`)
}

console.log(esMayorEdad(person))

console.log(imprimirMayorEdad(person))