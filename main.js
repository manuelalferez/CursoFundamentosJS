var peso = 63
console.log('Peso: ' + peso)

var correr = 3

peso -= correr

console.log('Después de correr: ' + peso)

var pastel = 5

peso += pastel

console.log('Después de pastel:' + peso)

peso++; // Suma uno
peso--; // Resta uno

console.log(peso)

var precioVino = 200.3

//var subirPrecioVino = precioVino * 100 * 3 / 100 //Para que se me muestren los decimales justos
var subirPrecioVino = Math.round(precioVino * 100 * 3) / 100
var total = subirPrecioVino.toFixed(2)

console.log(subirPrecioVino)

console.log(total)

var totalNumero = parseFloat(total)

var porcionesPizza = 8
var personas = 2

console.log(porcionesPizza / personas)
