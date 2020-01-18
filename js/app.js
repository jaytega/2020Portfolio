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

var fs = require('fs')
