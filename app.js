//create an express requirement
var express = require('express');
//create a body parser requirement, npm install body-parser
//this is middleware for serving route-specific pages through express
var bodyParser = require('body-parser');

//run the express constructor and assign it to an object
var app = express();
//at this point the express module is running

var urlencodedParser = bodyParser.urlencoded({ extended: false});

//set the view engine to ejs template engine
//this will default search in ./views folder
//requires .ejs template file
app.set('view engine', 'ejs');

//the following code allows node & uses an express middleware
// to link assets folder this is important to serve
// our css, js, images etc!!!
//
//'/assets' is the route from user and 'assets' is the
//name of the dir being served
app.use('/assets', express.static('assets'));


/*
//the following is a static route to the home directory "/"
app.get('/', function(req,res){
  //the thing to send
  res.sendFile(__dirname + '/exports/index.html');
});
*/

/*
/The following is using the render file to render the requested
/view through the template engine
*/
app.get('/', function(req,res){
  //the req object is expanded in  express
  //it can hold query strings ie ?username=jason
  console.log(req.query);
  //the thing to send
  //req.query is a query string (qs)
  res.render('index');
});

//this is a post request
//urlencodedParser is the middleware from bodyParser
//the middleware will fire when we make the post request to /
// it passes the post object for us as req.body
app.post('/', urlencodedParser, function(req,res){
  //the req object is expanded in  express
  //it can hold query strings ie ?username=jason

  //the thing to send
  //req.query is a query string
  res.render('index', {data: req.body});
});

//the following is a dynamic request to an example Profile
//commented out below  is example with the ":id" that gets
//passed in through the req object


app.get('/profile/:id', function(req,res){

  //create a data object in order to set different
  //kinds of variables i can call in the ejs file being rendered
  var data = {age: 30, job: 'software dev', hobbies: ['learning', 'sleeping', 'eating']};

  //render() default looks in /views folder
  //and is used to display ejs template file
  //the first paramater is the name of the ejs file
  //the second is an {} object that can be given
  //data and injected into the ejs file
  res.render('profile.ejs', {person: req.params.id, data: data});
                                  //can pass in more than 1 OBJECT
                                  //inside of the render call
                                  //daisy chain
    /*
    be aware for future sometimes might need to require file
    as well ie:
        app.engine('ejs', require('ejs').renderfile);
    */

/*
  //use the req object and .params then search for ":id"
  //by using complete req.params.id
  res.send('Profile request with id of ' + req.params.id);
  //this is commented out just to have as reference how to store ids
*/
});
//listen to a port for requests
app.listen(3000);
