const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
// const appRouter = require('./routes/appRoute.js');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// app.use('/api', appRouter);

const server = http.createServer(app);

const port = '8080'

server.listen(port)

app.use((req, res, next) => {
    console.log('requête reçue');
    res.send('requête reçue');
    res.status(200);
    res.end();
})

console.log('serveur opérationnel au port : ' + port)