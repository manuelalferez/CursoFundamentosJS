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

nombreUpper(objManuel)
nombreUpper(objPedro)