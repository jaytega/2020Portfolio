var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to database with mongoose
//this passes in the connection uri and passes a few
//options as objects to work with deprecated content in mongoose
mongoose.connect('mongodb+srv://jaytega:Roofplug89!@todo-pg41y.mongodb.net/test?retryWrites=true&w=majority',  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }).catch(error => handleError(error));

//First thing is to create a schema, aka a blueprint of how the
//data or objects are going to look so mongoDB can recognize
//use mongoose to generate a schema and store it in todoSchema
var todoSchema = new mongoose.Schema({
  //todo list items are just one property, the item itself
  //and it is String type
  item: String
});

//var Todo is a variable on nodejs , 'Todo' is the model name
//that gets stored on mongoDB, the second parameter of this
//model is the schema that we made above also known as a collection
var Todo = mongoose.model('Todo', todoSchema);

//var data = [];
var urlencodedParser = bodyParser.urlencoded({extended:false});


module.exports = function(app){
  //GET REQUESTS
  app.get('/todo', function(req,res){

    //get data from mongodb and pass it to the view (render)
    //{} object could hold something like item: 'buy flowers'
    //but if its empty them will find all

    Todo.find({}, function(err, data){ //once {} object, then callback function
      if (err) throw err;             //fires and handles errors and passing data
//data is passed back to find function data == Todo collection
      res.render('todo', {todos: data});
    });

  });
//POST REQUESTS
  app.post('/todo', urlencodedParser, function(req,res){
    //first step is to get data from the view
    //then we add it to mongoDB
    //use req.body to grab the entry
    var newTodo = Todo(req.body).save(function(err,data){
      //then tacking on .save() to push the data
      //to mongoDB while handling errors

      if (err) throw err;
        //data is jsonified in the res object
      res.json(data);
    });

  });

//:item is passed in from todo-list.js
  app.delete('/todo/:item', function(req,res){

    //deleting items from mongodb
    //Todo is the colleciton we want to find items from:
    //since we had previously replaced spaces with hyphens
    //we are switching it back so that we can match the items
    //if it matches then call remove(), catch errors and return json
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
      if (err) throw err;
      res.json(data);
    });
  });


/*
    //updating the data array for final list display
    //using filter() function to remove the ":item"
    //based off the return statement
    data = data.filter(function(todo){
      //firing replace() function to remove global spaces from item
      //then checking if it is equal to the req.params.item
      //if it is not equal then true
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);

    */


};
