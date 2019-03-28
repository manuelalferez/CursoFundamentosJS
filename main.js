console.log('a')
setTimeout( () => console.log('b'), 2000) 
console.log('c')
setTimeout( () => console.log('d'), 1000) 
// Las añade a una cola distinta, y las sacará cuando termine la ejecucion del programa principal 