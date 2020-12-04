// Rutas de productos

var path = require('path')

exports.categoria = function(req, res) {
    res.render(path.resolve('views/productos/categoria.html'))
}