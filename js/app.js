var events = require('events');
var util = require('util');

/*
/
/CREATING OBJECTS AND ASSIGNING ATTRIBUTES
/USING ARRAYS AND FOR EACH FUNCTIONS TO APPLY TO MULTIPLE OBJECTS
/EMITTERS USING events AND util REQUIRE
/


var Person = function(name, food){
  this.name = name;
  this.food = food;
}

util.inherits(Person, events.EventEmitter);

var jason = new Person('Jason', 'Steak');
var cindy = new Person('Cindy', 'Pizza & Papusa & Hotdog Piece');
var ah = new Person('Ah', 'Ahll of you.');

var people = [jason, cindy, ah];

people.forEach(function(person){
  person.on('rolecall', function(mssg){
    console.log(person.name + ' said: ' + mssg);
  });
  if(person == ah)
  {
    person.on('speak', function(mssg){
      console.log(person.name + ' said: ' + mssg);
    });
  }
});

jason.emit('rolecall', 'My favorite food is ' + jason.food);
cindy.emit('rolecall', 'My favorite food is ' + cindy.food);
ah.emit('speak', 'My favorite food is ' + ah.food);
*/

/*
/
/READING AND WRITING FILES
/
/
*/

var fs = require('fs');

var http = require('http');
/*
/
/Creating a server and listening to port 3000 and local ip
/will log to console requests to server regardless of directory...
/ALso piping res steram in myReadStream to serve the index.html
/this method chunks data giving quicker response times to users


var server = http.createServer(function(req,res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  //create a read stream that uses the directory name and .txt object and reads it in utf8
  var myReadStream = fs.createReadStream('./exports/index.html', 'utf8');
  //pipe the readstream to response bit by bit (chunking)
  myReadStream.pipe(res);
  //this also ends the response
});

server.listen(3000,'127.0.0.1');
console.log('Port 3000 being listened too');

*/
/*
/this method writes directly without chunking
/creating a server to serve json
*/

var server = http.createServer(function(req,res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'application/json'});
  var jsonObj = {
    name: 'Jason',
    job: 'Software Development',
    age: 30
  };
  res.end(JSON.stringify(jsonObj));
});

server.listen(3000,'127.0.0.1');
console.log('Port 3000 being listened too');
