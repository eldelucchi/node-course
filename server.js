 /* Here follows the part of the tutorial where I'm going to use Express! Express is a Node framework 
 that I'm going to use to potentially create an application with all that I've learned.*/

 var express = require('express');
 var app = express();
 var bodyParser = require('body-parser');

 //This line adds the functionality to serve static files
 app.use(express.static('public')); //'public' is the file containing the static resources

 //This is a GET request
 app.get('/', function (request, response) {
     response.send('Hello World GET');
     console.log(`Got a ${request.method} request for the homepage`);
 });

 //This is a POST request
 app.post('/', function (request, response) {
    response.send('Hello World POST');
    console.log(`Got a ${request.method} request for the homepage`);
});

//This is a DELETE request for the /del_user page
app.delete('/del_user', function (request, response) {
    response.send('Hello World DELETE');
    console.log(`Got a ${request.method} request for /del_user`);
});

// This responds a GET request for the /list_user page.
app.get('/list_user', function (request, response) {
    console.log("Got a GET request for /list_user");
    response.send('Page Listing');
 })
 
 // This responds a GET request for abcd, abxcd, ab123cd, and so on
 app.get('/ab*cd', function(request, response) {   
    console.log("Got a GET request for /ab*cd");
    response.send('Page Pattern Match');
 })

// Doing more with GET. This will route for a form in HTML sending input.
app.get('/index.html', function(req, res){
    res.sendFile(__dirname + '/' + 'index.html');
});
app.get('/process_get', (req, res) => {
    //Preparing the output in JSON format
    responseJSON = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(responseJSON);
    res.end(JSON.stringify(responseJSON));
});

// POST method for passing HTML form post

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/form-post.html', function(req, res){
    res.sendFile(__dirname + "/" + "form-post.html");
});

app.post('/process_post', urlencodedParser, (req, res) => {
    //Prepare output in JSON format
    response = {
        first_name : req.body.first_name,
        last_name: req.body.last_name
    }
    console.log(response);
    res.end(JSON.stringify(response));
})

 var server = app.listen(8081, () => {
     var host = server.address().address;
     var port = server.address().port;
     
     console.log(`My example app is listening at http://${host}:${port}`);
 })