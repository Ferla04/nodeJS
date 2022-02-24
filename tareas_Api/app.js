require('colors');
const { inquirerMenu, pausa } = require('./helpers/inquirer');

// const { mostrarMenu, pausa } = require('./helpers/mensaje');
console.clear();

const main = async() => {
    
    console.log('Hola Mundo');

    let opt = '';

    do{
        opt = await inquirerMenu();
        console.log(opt);

        await pausa();
        // if(opt !== '0') await pausa();

    }while(opt !== '0');

}

main();