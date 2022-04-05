const http = require('http');

http.createServer((req, res) => {


    //DOCUMENTOS TIPO JSON
    // res.writeHead(200, { 'Content-type': 'application/json'});


    //DESCARGAR ARCHIVOS CSV
    // res.setHeader('Content-Disposition','attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-type': 'application/csv'});

    // res.write('id, nombre\n');
    // res.write('1, Fernando\n');
    // res.write('2, Maria\n');
    // res.write('3, Juan\n');
    // res.write('4, Pedro\n');

    res.write('Hello World');
    res.end();

})
.listen(8080);

console.log('Listening port 8080');