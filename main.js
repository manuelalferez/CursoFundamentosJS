var cont = 0;

llueve = () => Math.random() < 0.25

do{
    cont++;
}while(!llueve())

if(cont===1) console.log(`Fui a ver si llovia 1 vez`)
else console.log(`Fui a ver si llovia ${cont} veces`)