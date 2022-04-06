const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public/pageCool'));


//Una manera para ir a esas rutas sin que el ellas este la extencion
//http://localhost:8080/generic y no http://localhost:8080/generic.html
app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/pageCool/generic.html');
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/pageCool/elements.html');
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`app listening at port ${port}`);
})

