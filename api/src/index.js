// Importamos express para facilitarnos crear el servidor y realizar llamadas HTTP
const express = require('express');
const path = require('path');
const bodyParser= require('body-parser')
var cors = require('cors') 

global.appRoot = path.resolve(__dirname);

const { mongoose } = require('./database');

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use('/img', express.static(__dirname + '/uploads'));

// Settings
app.set('port', process.env.PORT || 3001);

// Middlewares
app.use(express.json());

// Permisions
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
     next();
});
app.use(cors());

//Routes
app.use('/api/questions', require('./routes/question.routes'));
app.use('/api/user', require('./routes/user.routes'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});