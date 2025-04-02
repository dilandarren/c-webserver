import express from 'express';
import {dirname} from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

const port = 8080;
const app = express()

//Servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.send('Home Page')
});


app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public/generic.html');
});

app.get('/element', (req, res) => {
    res.sendFile(__dirname + '/public/element.html');
  });

app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});