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
 cargarElectrodomesticos=()=>{
   fetch("/assets/json/productos.json")
   .then((response)=>response.json())
   .then((str)=>{
     productos=str.productos;

     let k=0;
     let i=0;

     while(k<5){
       if(productos[i].tipo=="Electrodomesticos"){
         electros=document.getElementsByClassName("Electro")
         for(electro of electros){
           let electomulti;
           if(electro.id=="Electrodomesticos"){
             electromulti=electro.getElementsByClassName("multiple-items")[0];
             console.log("Aqui multiple")
           }
           else{
             electromulti=electro.getElementsByClassName("single-items")[0];
             console.log("Aqui single")
           }
           divinterno=electromulti.getElementsByTagName("div")[0];


           let electrocard=divinterno.getElementsByClassName("card")[k];
           let cardimg=electrocard.getElementsByTagName("img")[0];
           cardimg.src=productos[i].imageurl;

         }
         k++;
       }
       if(i>=productos.length){
         i=0;
       }
       else{
         i++;
       }

     }
   })
   .catch((error)=>{
     console.log("Error: "+error)
   })
 }


 document.addEventListener('DOMContentLoaded', function() {
     cargarNoticias();
     cargarElectrodomesticos();

 })
