const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 8080;

const setting = {
    nombre: 'Fernanda velasquez',
    titulo: 'Curso Node'
}

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', err => {});
/*registerPartials: nos ayuda a renderizar codigo,
crear como componentes*/

//servir contenido estático
app.use(express.static('public/pageCool2'));
/* Es esta carpeta de pageCool2 no hay hojas html
ya que no son necesarias, por lo que existe la carpeta views
(que se tiene que llamar asi para que handlebars la detecte)
con documentos hbs que renderiza html, AQUI se está utiliando 
la carpeta pageCool2 para usar assets e imagenes*/

//handlebars va a la carpeta de views
app.get('/', (req, res) => {
    res.render('home', setting);
})

app.get('/generic', (req, res) => {
    res.render('generic', setting);
})

app.get('/elements', (req, res) => {
    res.render('elements', setting);
})

// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/public/404.html');
// })

app.listen(port, () => {
    console.log(`app listening at port ${port}`);
})
