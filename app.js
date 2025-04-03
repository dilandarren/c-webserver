import express from 'express';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs'// HandleBars
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

const port = 8080;
const app = express();


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));


//Servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Chopsero',
    titulo: 'Mostacho'
  });
});


app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Generic',
    titulo: 'Generic'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Elements',
    titulo: 'Elements'
  });
});

app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});