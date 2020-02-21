const EventEmitter = require('events'); //Notice different naming convention, this is a class, a container for methods that will be used

// Here we want to send a fake http request to this url endpoint
var url = 'http://logger.io/log';

class Logger extends EventEmitter{
    log(message){ //When function in a class, no function keyword and it's called a method 
        // Send an http request (fake, high level)
        console.log(message);
    
        // To RAISE AN EVENT, emit signal that an event has happened.
        // Add even arguments such as an object with an id and url
        this.emit('messageLogged', message);
    }    
}

//This essentially sets the "log" function to "public" by putting it in on object in exports
// If you don't want to put it in an object, just module.exports = log, if you do then module.exports.log = log then it's an object
//
module.exports = Logger; 
// Don't have to call it the same thing when you export:
//module.exports.endPoint = url;

/* Secretly, Node is turning this into a function with these parameters:
    function(exports, require, module, _filename, _dirname)
    This means that the following are equivalent, as 'exports' is a shortcut to 'module.exports'
        module.exports.log = log
        exports.log = log 
    But not like this:
        exports = log NO we cannot change reference to module.exports
*/

