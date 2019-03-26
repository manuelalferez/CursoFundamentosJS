var objManuel = {
    nombre: 'Manuel',
    apellidos: 'Alférez',
    edad: 21
}

var objPedro = {
    nombre: 'Pedro',
    apellidos: 'Alférez',
    edad: 17
}

nombreUpper = ({ nombre }) => {
    console.log(nombre.toUpperCase())
}

saludo = (persona) => {
    const { nombre } = persona;
    const { edad } = persona;
    console.log(`Hola ${nombre}, tengo ${edad} años`)
    /*     console.log('Hola ' + nombre + ',tengo ' + edad + ' años') */
}

nombreUpper(objManuel)
nombreUpper(objPedro)

saludo(objManuel)