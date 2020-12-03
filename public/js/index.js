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



// cargarNoticias = () => {
//     fetch()
// }

// document.addEventListener('DOMContentLoaded', function() {
//     cargarNoticias();

// })