// //console.log(module);

// // To load a module, we use "require" function, it returns whatever the module does
// const log = require('./logger'); // Best to save in constant so we don't override

// log.log('message');

/* The 'path module gives us info about the path of our module:
    const path = require('path');

    var pathObject = path.parse(__filename);
    console.log(pathObject);
*/

/* The 'os' module gives us info about the operating system of our module:
const os = require('os');
var totalMem = os.totalmem();
var freeMem = os.freemem();
console.log(`Total Memory${totalMem}, Free Memory: ${freeMem}`);
*/


/* The 'fs' module gives us info about the file system of our module:
    const fs = require('fs');

    All the methods come in pairs, synch and asynch. It's best to use asynch always
    so you can handle the result in a callback. 

// The synchronous version is simple and does not require a callback
const syncFiles = fs.readdirSync('./');
// The asynch version takes a callback as the second parameter
const files = fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
});
console.log(files);
*/ 

/* So many things in Node are based off events. Ex: if we have web sever sending and reciving
    http requests/response, we can listen at a certain port and create an even to respond to 
    requests. 

// // We don't use the following class very often as the objects created are scoped only in the module that makes it
const EventEmitter = require('events'); //Notice different naming convention, this is a class, a container for methods that will be used
// //Create instance of class, an actual object:
// const emitter = new EventEmitter();

// //Todo: raise and handle 'logging' event that takes (data: message)
// emitter.on('logging', arg => {
//     console.log(arg);
// });
// emitter.emit('logging', {data: 'Hello'});

const Logger = require('./logger');
const logger = new Logger();

//Register a listener:
logger.on('messageLogged', eventArg => {
    //This function is called when the even is raised.
    console.log(`Listener called`, eventArg);
});

logger.log('message'); 

*/


/* Let's try using the HTTP module that's used to create networking applications.
    How about creating a web server that listens to HTTP requests on a given port?*/

const http = require('http');

const server = http.createServer((request, response) => {
    if(request.url === '/'){
        response.write('Hello World');
        response.end();
    }

    // If we want to create a backend service for something, we have to handle various routes
    // In this case, add more ifs
    if(request.url === '/api/courses'){
        response.write(JSON.stringify([1, 2, 3]));
        response.end();
    }
});

// IRL, we would not do this, which is responding to the connection event to build an http service, 
// this is really low level but I'm going to just demonstrate
// Normally, one would pass a callback function to the createServer() method
// server.on('connection', socket => {
//     console.log("new connection");
// })

server.listen(3000);
console.log('Listening on port 3000');

 