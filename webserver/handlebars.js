const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'hbs');

//handlebars va a la carpeta de views
app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
    console.log(`app listening at port ${port}`);
})
