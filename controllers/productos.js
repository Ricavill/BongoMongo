// Rutas de productos

var path = require('path')

exports.catalog = function(req, res) {
    res.render(path.resolve('views/productos/productos.html'))
}