function buscar() {
    let texto = document.getElementById("search-text").value.toLowerCase()

    console.log(texto)

    if (texto) {
        window.location = "/productos/todos?nombre=" + texto
    }
}

// A ejecutar cuando se sueltan teclas
document.getElementById("search-bar").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        buscar()
    }
});