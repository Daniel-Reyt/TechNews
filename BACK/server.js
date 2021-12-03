const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:4200'
}))

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

require('./routers/index.router')(app);

const server = http.createServer(app);

const port = '8080'

server.listen(port);
console.log("serveur ok au port : " + port)