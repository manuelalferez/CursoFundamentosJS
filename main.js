var x = 5, y = '5'
console.log(x==5)

var person = {
    name: 'Manuel',
}

var person2 = {
    ...person //Son objetos independientes
}

var person3 = person; //SOn objetos cuyas variables apuntan a la misma zona de memoria, si cambiamos uno cambian ambos

console.log(person3.name)
console.log(person.name)
person3.name = 'Pedro'
console.log(person3.name)
console.log(person.name)
