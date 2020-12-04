// Rutas de admin
var path = require('path')

exports.index = function(req, res) {
    res.render(path.resolve('views/admin/index.html'))
}

exports.commerce = function(req, res) {
    res.render(path.resolve('views/admin/index.html'))
}
exports.analytics = function(req, res) {
    res.render(path.resolve('views/admin/analytics.html'))
}

exports.profile = function(req, res) {
    res.render(path.resolve('views/admin/profile.html'))
}

exports.components = function(req, res) {
    res.render(path.resolve('views/admin/components.html'))
}

