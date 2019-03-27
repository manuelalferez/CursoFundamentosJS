var hijos = prompt("¿Cuántos hijos tienes?")

switch (hijos) {
    case '0':
        console.log("Cero está bien. Ya llegará")
        break
    case '1':
        console.log("Uno, dos, tres pollito inglés")
        break
    case '2':
        console.log("Una pareja")
        break
    default:
        console.log("No entiendo")
        break
}
