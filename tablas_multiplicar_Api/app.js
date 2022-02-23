const {createFile} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

// process.argv = Obtener los datos ingresados en la consola;

/*DIFERENCIA ENTRE PROCESS.ARGV Y ARGV DE YARS
process.argv: entrega los datos del comando en un array;
argv de yargs: entrega los datos del comando en un objeto, siendo este mejor para
               un codigo mas robusto; (tiene mas veneficios)
console.log(argv);
*/


/* NO ES RECOMENDABLE
const [ , , arg3 = 'base=5'] = process.argv;
const [ , base = 5] = arg3.split('=');
*/

console.clear();


createFile(argv.b, argv.l, argv.h)
    .then(nameFile => console.log(nameFile.underline.magenta))
    .catch(err => console.log(err));

