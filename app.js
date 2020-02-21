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


 