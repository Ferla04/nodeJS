const express = require('express');
const app = express();
const port = 8080;


//Servir contenido estático
app.use(express.static('public'));

app.get('/contenido-Carpeta', (req, res) => {
    res.write(`contenido que no se muesta si primero hay 
    una carpeta con el nombre de la ruta desde public`);
})

app.get('/Hello-World', (req, res) => {
    res.send('Hello World');
})

//COMODIN * --> cualquier ruta que no este
//establecida se mostrará la ruta del comodín.
app.get('*', (req, res) => {
    /* Este ejemplo no funcionará ya que necesita
    una ruta absoluta */
    // res.sendFile('public/404.html');

    //RUTA ABSOLUTA __dirname
    res.sendFile(__dirname + '/public/404.html');

})

app.listen(port, () => {
    console.log(`app listening at port ${port}`);
})