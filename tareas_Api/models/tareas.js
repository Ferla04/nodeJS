/*
    _listado ={
        uuid-12-354: {id:'',desc:'',completadoEn:''}
    }
*/
const colors = require('colors');
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

    listadoCompleto() {

        console.log();

        this.listaArr.forEach((tarea,i) => {
            
            const idx = `${i+1}`.yellow;
            const {desc,completadoEn} = tarea;
            const estado = (completadoEn) 
                                    ? 'Completada'.green 
                                    : 'Pendiente'.red;

            console.log(`${idx}. ${desc} :: ${estado}`);
        })
    }

    listarPendientesCompletadas( completadas = true){

        console.log();
        let contador = 0;

        this.listaArr.forEach(tarea => {
            
            const {desc,completadoEn} = tarea;
            const verify = (completadoEn)? true : false;

            if(verify === completadas){
                contador += 1;
                const estado = (completadoEn) 
                                        ? `${'Completada'.green} :: ${completadoEn.green}`
                                        : 'Pendiente'.red;
    
                console.log(`${colors.yellow(`${contador}.`)} ${desc} :: ${estado}`);
            }
        })

    }

    borrarTarea( id = ''){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    toggleCompletadas(ids = []){

        ids.forEach(id => {
            const tarea = this._listado[id];
            if( !tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString()
            }
        })

        this.listaArr.forEach( tarea =>{

            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
            }
        })


    }

}

module.exports = Tareas;
