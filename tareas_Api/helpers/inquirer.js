const inquirer = require('inquirer');
require('colors');

const question = [
    {
        type:'list',
        name: 'option',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear Tarea'
            },            
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },            
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },            
            {
                value: '5',
                name: '5. Completar tarea(s)'
            },            
            {
                value: '6',
                name: '6. Borrar tarea'
            },            
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
]


const inquirerMenu = async() => {

    console.clear()
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

module.exports = {
    inquirerMenu,
    pausa
}