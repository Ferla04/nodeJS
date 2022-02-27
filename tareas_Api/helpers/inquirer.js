const inquirer = require('inquirer');
const { validate } = require('uuid');
require('colors');

const question = [
    {
        type: 'list',
        name: 'option',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.yellow} Crear Tarea`
            },            
            {
                value: '2',
                name: `${'2.'.yellow} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.yellow} Listar tareas completadas`
            },            
            {
                value: '4',
                name: `${'4.'.yellow} Listar tareas pendientes`
            },            
            {
                value: '5',
                name: `${'5.'.yellow} Completar tarea(s)`
            },            
            {
                value: '6',
                name: `${'6.'.yellow} Borrar tarea`
            },            
            {
                value: '0',
                name: `${'0.'.yellow} Salir`
            }
        ]
    }
]


const inquirerMenu = async() => {

    console.clear();
    console.log('============================'.yellow);
    console.log('   Seleccione una opción');
    console.log('============================ \n'.yellow);

    const {option} = await inquirer.prompt(question);
    return option;
}

const pausa = async() => {

    const enter = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.yellow} para continuar`
        }
    ];
    
    console.log('\n');
    await inquirer.prompt(enter);
}

const leerInput = async (message) => {

    const question =  [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

const listadoTareasBorrar = async (tareas = []) =>{

    const choices = tareas.map((tarea,i) => {
        
        const idx = `${i + 1}.`.yellow;

        return{
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    })

    choices.unshift({
        value: '0',
        name: '0.'.yellow + ' Cancelar'
    })

    const pregunta = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(pregunta);
    return id;
}

const confirmar = async (mensaje) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            mensaje
        }
    ]

    const { ok } = await inquirer.prompt(question);
    return ok
}

const mostrarListadoChecklist = async (tareas = []) =>{

    const choices = tareas.map((tarea,i) => {
        
        const idx = `${i + 1}.`.green;

        return{
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn)? true : false
        }
    })

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(pregunta);
    return ids;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
}