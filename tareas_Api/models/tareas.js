/*
    _listado ={
        uuid-12-354: {id:'',desc:'',completadoEn:''}
    }
*/

const Tarea = require('./tarea');


class Tareas {

    _listado = {};

    get listaArr(){

        const listado = [];
        Object.keys(this._listado).forEach(key => {
            listado.push(this._listado[key]);
        })

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    crearTarea(des = ''){

        const tarea = new Tarea(des);
        this._listado[tarea.id] = tarea;

    }

    cargarTareasFromArray( tareas = [] ) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

}

module.exports = Tareas;
