require('colors');

const mostrarMenu = () => {
    return new Promise(resolve => {

        console.clear();
        console.log('============================'.yellow);
        console.log('   Seleccione una opción');
        console.log('============================ \n'.yellow);
    
        console.log(`${'1.'.yellow} Crear una tarea`);
        console.log(`${'2.'.yellow} Listar tareas`);
        console.log(`${'3.'.yellow} Listar tareas completadas`);
        console.log(`${'4.'.yellow} Listar tareas pendientes`);
        console.log(`${'5.'.yellow} Completar tarea`);
        console.log(`${'6.'.yellow} Borrar tareas`);
        console.log(`${'0.'.yellow} Salir \n`);
    
        //Interfaz para dar y recibir info.
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Seleccione un opción: ', (opt) => {
            readline.close();
            resolve(opt);
        })
    });
}

const pausa = () => {
    return new Promise(resolve =>{

        //Interfaz para dar y recibir info.
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${'ENTER'.yellow} para continuar \n`, (opt) => {
            readline.close();
            resolve();
        })
    })
}


module.exports = {
    mostrarMenu,
    pausa
}