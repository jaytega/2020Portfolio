//require express include
var express = require('express');
var todoController = require('./controllers/todoController');
//run express
var app = express();

//template engine
app.set('view engine', 'ejs');

//middleware static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port

app.listen(3000);
console.log('port 3000 listening');
