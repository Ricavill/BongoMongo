const intro = introJs();
intro.setOptions({
    steps:[
        {
            intro: "Bienvenido a nuestro sitio web! Aqui un pequeño tour."
        },
        {
            element : "#publicidad",
            intro: "Aqui puede encontrar la publicidad del sitio."
        },
        { 
            element: "nav",
            intro: "Aqui la barra de navegacion con botenes para que navegues por el sitio."

        },
        {
            element: "#Electrodomesticos",
            intro: "Puedes encontrar rapidamente productos que estan distribuidos por categorias."
        },
        {
            element: "#pie1",
            intro: "Finalmente puedes ver nuestras redes e informacion para que nos contactes :)"
        }
    ]
})
intro.start();