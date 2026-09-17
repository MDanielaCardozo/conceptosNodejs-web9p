const { log } = require("console")
const fs = require("fs")

try {
    const data = fs.readFileSync('./personajes.txt', 'utf-8')
    console.log(data);
} catch (error) {
    console.error(`Ocurrio un error al leer el archivo de sincrona: \n ${error}`);
    
}