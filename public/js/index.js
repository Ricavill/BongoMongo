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
       for()

     })
 }

 document.addEventListener('DOMContentLoaded', function() {
     cargarNoticias();

 })
