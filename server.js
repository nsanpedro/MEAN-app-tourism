const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();


//Archivo de la API para interactuar con Mongo
const api = require('./server/routes/api');

//parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Ubicacion de DIST
app.use(express.static(path.join(__dirname, 'dist')));

//API location
app.use('/api', api);


//Reqs para angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Puerto
const port = process.env.PORT || '3000';
app.set('port', port);

//server

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));
