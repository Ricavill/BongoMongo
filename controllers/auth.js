// Rutas de productos

var path = require('path')

exports.login = function(req, res) {
    res.render(path.resolve('views/auth/login.html'))
}

exports.register = function(req, res) {
    res.render(path.resolve('views/auth/registro.html'))
}