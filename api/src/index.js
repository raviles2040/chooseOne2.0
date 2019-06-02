// Importamos express para facilitarnos crear el servidor y realizar llamadas HTTP
const express = require('express');
const path = require('path');
const bodyParser= require('body-parser')

global.appRoot = path.resolve(__dirname);

const { mongoose } = require('./database');

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use('/img', express.static(__dirname + '/uploads'));

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Permisions
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
     next();
});

//Routes
app.use('/api/questions', require('./routes/question.routes'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});