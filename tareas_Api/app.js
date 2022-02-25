require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { 
    inquirerMenu, 
    pausa,
    leerInput 
} = require('./helpers/inquirer');

const Tareas = require('./models/tareas');

// const { mostrarMenu, pausa } = require('./helpers/mensaje');
console.clear();

const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB);
    }

    do{
        //Imprimir el menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1': //crear opcion
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea(desc);
            break;

            case '2': 
                console.log(tareas.listaArr);
            break;
        
        }

        guardarDB( tareas.listaArr );

        // await pausa();
        if(opt !== '0') await pausa();

    }while(opt !== '0');

}

main();