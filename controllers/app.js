var PORT = process.env.PORT || 3000
var express = require('express')
    // var session = require('express-session')
var bodyParser = require('body-parser')
var path = require('path')
var nunjucks = require('nunjucks')
var auth = require('./auth.js')
var prods = require('./productos.js')
var admin = require('./admin.js')
var app = express();

module.exports = app;

app.engine('html', nunjucks.render)

// app.use(session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true
// }));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

/*const indexController = require('../controllers/index');*/
/*router.get('/', indexController.index);*/

app.use(express.static('public'))
app.use('/scripts', express.static('node_modules'))

app.get('/', function(request, response) {
    response.render(path.resolve('views/home/index.html'))
});

app.get('/contactos', function(request, response) {
    response.render(path.resolve('views/home/contactos.html'))
});

app.get('/nosotros', function(request, response) {
    response.render(path.resolve('views/home/nosotros.html'))
});

app.get('/productos', prods.catalog)

app.get('/auth/login', auth.login)
app.get('/auth/register', auth.register)

app.get('/admin', function(request, response) {
    response.render(path.resolve('views/admin/index.html'))
});

app.get('/admin/commerce', admin.commerce)

app.get('/admin/analytics', admin.analytics)

app.get('/admin/components', admin.components)

app.listen(PORT);