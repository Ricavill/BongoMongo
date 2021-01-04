

$(function () {
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


cargarCards = () =>{
    let elementos = document.getElementsByClassName("multiple-items")
    let single = document.getElementsByClassName("single-items")
    for(let multi of elementos){
        for(var i = 0 ; i < 6 ; i++){
            let div = document.createElement("div")
            let divCard = document.createElement("div");
            
            divCard.setAttribute("class","card cardcm");
            let image = document.createElement("img");
            image.setAttribute("class","card-img-top");
            image.setAttribute("alt","Card image cap");
            image.setAttribute("height","280px");
            image.setAttribute("rel","nofollow");
            let divBody = document.createElement("div");
            divBody.setAttribute("class","card-body");
            let cardP = document.createElement("p");
            cardP.setAttribute("class","card-text my-3 text-center");
            cardP.textContent = "nombre";
            let cardPrecio = document.createElement("p");
            cardPrecio.setAttribute("class","card-text my-1 text-center");
            divBody.appendChild(cardP);
            divCard.appendChild(image);
            divCard.appendChild(cardP);
            divCard.appendChild(cardPrecio);
            div.appendChild(divCard);
            multi.appendChild(div)
        }

    }
    for(let elemento of single){
        for(var i = 0 ; i < 6 ; i++){
            let div = document.createElement("div")
            let divCard = document.createElement("div");
            divCard.setAttribute("class","card cardcm");
            let image = document.createElement("img");
            image.setAttribute("class","card-img-top");
            image.setAttribute("alt","Card image cap");
            image.setAttribute("height","280px");
            image.setAttribute("rel","nofollow");
            let divBody = document.createElement("div");
            divBody.setAttribute("class","card-body");
            let cardP = document.createElement("p");
            cardP.setAttribute("class","card-text my-3 text-center");
            cardP.textContent = "nombre";
            let cardPrecio = document.createElement("p");
            cardPrecio.setAttribute("class","card-text my-1 text-center");
            divBody.appendChild(cardP);
            divCard.appendChild(image);
            divCard.appendChild(cardP);
            divCard.appendChild(cardPrecio);
            div.appendChild(divCard);
            elemento.appendChild(div);
        }

    }


}
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

                    electrodomesticosLista.getElementsByTagName("p")[0].textContent = producto.nombre
                    electrodomesticosLista.getElementsByTagName("p")[1].textContent = " $" + producto.precio
                    electrodomesticosListaMovil.getElementsByTagName("p")[0].textContent = producto.nombre
                    electrodomesticosListaMovil.getElementsByTagName("p")[1].textContent = " $" + producto.precio

                    contador++;
                }

            }

        })
        .then(() => {
            cargarTecnologia();
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
                    let electrodomesticosLista = document.getElementsByClassName("Tecno")[0].getElementsByClassName("multiple-items")[0].getElementsByTagName("div")[0].getElementsByClassName("card")[contador]
                    let electrodomesticosListaMovil = document.getElementsByClassName("Tecno")[1].getElementsByClassName("single-items")[0].getElementsByTagName("div")[0].getElementsByClassName("card")[contador]

                    let cardImg1 = electrodomesticosLista.getElementsByTagName("img")[0]
                    let cardImg2 = electrodomesticosListaMovil.getElementsByTagName("img")[0]
                    cardImg1.src = producto.imageurl
                    cardImg2.src = producto.imageurl

                    electrodomesticosLista.getElementsByTagName("p")[0].textContent = producto.nombre
                    electrodomesticosLista.getElementsByTagName("p")[1].textContent = " $" + producto.precio
                    electrodomesticosListaMovil.getElementsByTagName("p")[0].textContent = producto.nombre
                    electrodomesticosListaMovil.getElementsByTagName("p")[1].textContent = " $" + producto.precio

                    contador++;
                }

            }
            


        })
        .then(()=>{
            eliminarVacios();
        })
        .catch((error) => {
            console.log("Error: " + error)
        })
        
        
}
let reordenar = () =>{
    let slickTrack = document.getElementsByClassName("slick-track");
    for(let track of slickTrack){
        let contador = 0;
        for(let slide of track.getElementsByClassName("slick-slide")){
            slide.setAttribute("data-slick-index",contador)
            contador = contador + 1;
        }
    }

}

let eliminarVacios = () =>{
    let cards = document.getElementsByClassName("card cardcm")
    let lista = []
    for(let tarjeta of cards){
        let nombre = tarjeta.getElementsByTagName("p")[0]
        if(nombre.textContent.includes("nombre")){
            lista.push(tarjeta)
        }

    }

    for(let tarjeta of lista){
        $(tarjeta.parentNode.parentNode.parentNode.parentNode).slick('slickRemove',$(tarjeta.parentNode).data('slick-index'));
        reordenar();
    }


}

document.addEventListener('DOMContentLoaded', function () {
    cargarNoticias();
    cargarCards();
    cargarElectrodomesticos();

})