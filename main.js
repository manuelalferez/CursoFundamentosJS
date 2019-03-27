var person = {
    name: 'Manuel',
    age: 21,
    weight: 63
}

const DIAS_ANIO = 365
const DIF_KILOS = 0.2;

console.log(`A principios de año ${person.name} pesa ${person.weight}kg`)

subePeso = (person) =>{
    person.weight += DIF_KILOS;
}

bajaPeso = (person) =>{
    person.weight -= DIF_KILOS;
}

for (var i = 1; i <= DIAS_ANIO; i++) {
    var random = Math.random()

    if (random < 0.25) {
        subePeso(person)
    } else if (random < 0.5) {
        bajaPeso(person)
    }
}

console.log(`A finales de año ${person.name} pesa ${person.weight.toFixed(2)}kg`)