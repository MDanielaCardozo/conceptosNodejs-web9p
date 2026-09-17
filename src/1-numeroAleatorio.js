//crear un programa que reciba dos argumentos y me genere el numero aleatorio entre esos dos valores. si no me pasan los argumentos entonces por defecto usare el valor del 1 al 100

const argumentos = process.argv;

const args = argumentos.slice(2)

console.log(argumentos);

let min = 1;
let max = 100;

if (args.length === 2) {
    const minParse = parseInt(args[0]);
    const maxParse = parseInt(args[1]);
    //preguntar si los dos numeros son validos y tambien que min es menor al max
    if (!isNaN(minParse) && !isNaN(maxParse) && minParse < maxParse) {
        //guardo la validaciones en variables
        min = minParse;
        max = maxParse;
    } else {
        console.log("Rango invalido. Usaremos los valores por defecto min=1 y max=100");
        
    }
} 

const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`El numero aleatorio entre ${min} y ${max} es: ${aleatorio}`);
