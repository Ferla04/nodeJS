const fs = require('fs');
const colors = require('colors');

const createFile = async (main = 5,list = false, hasta = 10) =>{

    try {
    
        // let result = `=================== \n    Tabla del ${main} \n=================== \n `;
        let result = '';
        let consola = ''
    
        for(let i = 1; i <= hasta; i++){
            consola += `${main} ${'x'.magenta} ${i} ${'='.magenta} ${main*i} \n`;
            result += `${main} x ${i} = ${main*i} \n`
        }
        
        if(list){
            console.log('==================='.rainbow);
            console.log(`   Tabla del ${colors.magenta(main)}`);
            console.log('==================='.rainbow);
            console.log(consola);
        } 
        
        fs.writeFileSync(`./salida/tabla-${main}.txt`,result);
        return `tabla-${main}.txt saved!`;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    createFile
}