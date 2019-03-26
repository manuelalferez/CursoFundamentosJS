var nombre = 'Manuel'

nombreUpper = (nombre) =>{
   // windows.nombre De esta forma de podría acceder a la variable global
    nombre = nombre.toUpperCase();
    console.log(nombre)
}

nombreUpper(nombre)