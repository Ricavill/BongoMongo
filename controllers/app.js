var express = require('express')
var session = require('express-session')
var bodyParser = require('body-parser')
var path = require('path');

var app = express();

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', function(request, response) {
    response.sendFile(path.resolve('views/home/index.html'));
});

app.listen(3000);