$(function() {
    $('.multiple-items').slick({
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3

    });

    $('.single-items').slick({
        dots: true,
        infinite: false,
    });
});



cargarNoticias = () => {
    fetch("/assets/json/noticias.json")
        .then((response) => response.json())
        .then((str) => {
            noticias = str.noticias;
            for (let i = 0; i < noticias.length; i++) {
                carrusel = document.getElementById('publicidad');
                dentrocarrusel = carrusel.getElementsByClassName('carousel-inner')[0];
                itemcarrusel = dentrocarrusel.getElementsByClassName("carousel-item")[i];
                imagen = itemcarrusel.getElementsByTagName('img')[0];
                imagen.src = noticias[i].urlfoto;
            }


        })
}
cargarElectrodomesticos = () => {
    fetch("/assets/json/productos.json")
        .then((response) => response.json())
        .then((str) => {
            productos = str.productos;
            let contador = 0;
            for (let producto of productos) {
                if (producto.tipo.includes("Electro")) {
                    let electrodomesticosLista = document.getElementsByClassName("Electro")[0].getElementsByClassName("multiple-items")[0].getElementsByTagName("div")[0].getElementsByClassName("card")[contador]
                    let electrodomesticosListaMovil = document.getElementsByClassName("Electro")[1].getElementsByClassName("single-items")[0].getElementsByTagName("div")[0].getElementsByClassName("card")[contador]

                    let cardImg1 = electrodomesticosLista.getElementsByTagName("img")[0]
                    let cardImg2 = electrodomesticosListaMovil.getElementsByTagName("img")[0]
                    cardImg1.src = producto.imageurl
                    cardImg2.src = producto.imageurl

                    electrodomesticosLista.getElementsByTagName("p")[0].textContent = producto.nombre + " $" + producto.precio
                    electrodomesticosListaMovil.getElementsByTagName("p")[0].textContent = producto.nombre + " $" + producto.precio

                    contador++;
                }

            }

        })
        .catch((error) => {
            console.log("Error: " + error)
        })
}


cargarTecnologia = () => {
    fetch("/assets/json/productos.json")
        .then((response) => response.json())
        .then((str) => {
            productos = str.productos;
            let contador = 0;
            for (let producto of productos) {
                if (producto.tipo.includes("Tecno")) {
                    console.log(document.getElementsByClassName("Tecno")[0].getElementsByClassName("multiple-items")[0].getElementsByTagName("div")[0].getElementsByClassName("card"))
                    let electrodomesticosLista = document.getElementsByClassName("Tecno")[0].getElementsByClassName("multiple-items")[0].getElementsByTagName("div")[0].getElementsByClassName("card")[contador]
                    let electrodomesticosListaMovil = document.getElementsByClassName("Tecno")[1].getElementsByClassName("single-items")[0].getElementsByTagName("div")[0].getElementsByClassName("card")[contador]

                    let cardImg1 = electrodomesticosLista.getElementsByTagName("img")[0]
                    let cardImg2 = electrodomesticosListaMovil.getElementsByTagName("img")[0]
                    cardImg1.src = producto.imageurl
                    cardImg2.src = producto.imageurl

                    electrodomesticosLista.getElementsByTagName("p")[0].textContent = producto.nombre + " $" + producto.precio
                    electrodomesticosListaMovil.getElementsByTagName("p")[0].textContent = producto.nombre + " $" + producto.precio

                    contador++;
                }

            }

            // Para cargar los repetidos
            // TODO: Remover esta forma de llenar los carruseles
            for (let producto of productos) {
                if (producto.tipo.includes("Tecno")) {
                    console.log(document.getElementsByClassName("Tecno")[0].getElementsByClassName("multiple-items")[0].getElementsByTagName("div")[0].getElementsByClassName("card"))
                    let electrodomesticosLista = document.getElementsByClassName("Tecno")[0].getElementsByClassName("multiple-items")[0].getElementsByTagName("div")[0].getElementsByClassName("card")[contador]
                    let electrodomesticosListaMovil = document.getElementsByClassName("Tecno")[1].getElementsByClassName("single-items")[0].getElementsByTagName("div")[0].getElementsByClassName("card")[contador]

                    let cardImg1 = electrodomesticosLista.getElementsByTagName("img")[0]
                    let cardImg2 = electrodomesticosListaMovil.getElementsByTagName("img")[0]
                    cardImg1.src = producto.imageurl
                    cardImg2.src = producto.imageurl

                    electrodomesticosLista.getElementsByTagName("p")[0].textContent = producto.nombre + " $" + producto.precio
                    electrodomesticosListaMovil.getElementsByTagName("p")[0].textContent = producto.nombre + " $" + producto.precio

                    contador++;
                }

                if (contador > 8) {
                    break;
                }

            }

        })
        .catch((error) => {
            console.log("Error: " + error)
        })
}


document.addEventListener('DOMContentLoaded', function() {
    cargarNoticias();
    cargarElectrodomesticos();
    cargarTecnologia();

})