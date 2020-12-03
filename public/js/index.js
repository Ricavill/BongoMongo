$(function() {
    $('.multiple-items').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3

    });

    $('.single-items').slick({
        dots: true,
        infinite: true,
    });
});



 cargarNoticias = () => {
     fetch("/assets/json/noticias.json")
     .then((response)=>response.json())
     .then((str)=>{
       noticias=str.noticias;
       for(let i=0;i<noticias.length;i++){
         carrusel=document.getElementById('publicidad');
         dentrocarrusel=carrusel.getElementsByClassName('carousel-inner')[0];
         itemcarrusel=dentrocarrusel.getElementsByClassName("carousel-item")[i];
         imagen=itemcarrusel.getElementsByTagName('img')[0];
         imagen.src=noticias[i].urlfoto;
       }


     })
 }

 document.addEventListener('DOMContentLoaded', function() {
     cargarNoticias();

 })
