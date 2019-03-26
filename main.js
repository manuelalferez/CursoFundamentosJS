var Manuel = {
    nombre: 'Manuel',
    apellidos: 'Alférez',
    edad: 21
}


happyBirdDay = (persona) => {
    return {
        ...persona, //Una forma de copiar todo los datos del objeto que se le pasa
        edad: persona.edad + 1 //Los datos que queremos modificar
    }
}

var OldManuel = happyBirdDay(Manuel)

console.log(Manuel)
console.log(OldManuel)