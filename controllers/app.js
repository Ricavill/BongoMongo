var express = require('express')
var session = require('express-session')
var bodyParser = require('body-parser')
var path = require('path')
var nunjucks = require('nunjucks')

var app = express();
app.engine('html', nunjucks.render)

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static('public'))
app.use('/scripts', express.static('node_modules'));

app.get('/', function(request, response) {
    response.render(path.resolve('views/home/index.html'));
});

app.listen(3000);