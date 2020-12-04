cargarCategorias = () => {
    fetch("/assets/json/categorias.json")
        .then((response) => response.json())
        .then((data) => {

            let categories = document.getElementsByClassName("categories")[0]

            for (let categoryFields of data.categorias) {

                let categoryCard = document.createElement("div")
                categoryCard.className = "categoryCard"

                categoryCard.onclick = function() {
                    window.location = "/productos/" + categoryFields.nombre
                }

                // catImg
                let catImg = document.createElement("div")
                catImg.className = "catImg"

                let catImgC = document.createElement("img")
                catImgC.className = "catImgC"
                catImgC.src = categoryFields.img

                catImg.appendChild(catImgC)
                categoryCard.appendChild(catImg)

                // catName
                let catName = document.createElement("div")
                catName.className = "catName"

                let catNameP = document.createElement("p")
                catNameP.className = "catNameP"
                catNameP.textContent = categoryFields.nombre

                catName.appendChild(catNameP)
                categoryCard.appendChild(catName)

                categories.appendChild(categoryCard)
            }
        })
        .catch((error) => {

            console.log("Error ", error)

        })
}

cargarProductos = () => {
    fetch("/assets/json/productos.json")
        .then((response) => response.json())
        .then((data) => {

            let products = document.getElementsByClassName("products")[0]
            const category = window.location.pathname.split("/").pop().toLowerCase().substring(0, 5)

            for (let productFields of data.productos) {

                if (category.localeCompare("todos")) {
                    if (productFields.tipo.toLowerCase().substring(0, 5).localeCompare(category)) {
                        continue
                    }
                }

                let productCard = document.createElement("div")
                productCard.className = "productCard"

                // catImg
                let prodImg = document.createElement("div")
                prodImg.className = "prodImg"

                let prodImgC = document.createElement("img")
                prodImgC.className = "prodImgC"
                prodImgC.src = productFields.imageurl

                prodImg.appendChild(prodImgC)
                productCard.appendChild(prodImg)

                // prodInfo
                let prodInfo = document.createElement("div")
                prodInfo.className = "prodInfo"

                // price
                let price = document.createElement("div")
                price.className = "price"

                let priceP = document.createElement("p")
                priceP.className = "priceP"
                priceP.textContent = "$" + productFields.precio + ".00"
                price.appendChild(priceP)

                // name
                let name = document.createElement("div")
                name.className = "name"

                let nameP = document.createElement("p")
                nameP.className = "nameP"
                nameP.textContent = productFields.nombre
                name.appendChild(nameP)

                // rating
                let rating = document.createElement("div")
                rating.className = "rating"

                prodInfo.appendChild(price)
                prodInfo.appendChild(name)
                prodInfo.appendChild(rating)
                productCard.appendChild(prodInfo)

                products.appendChild(productCard)
            }
        })
        .catch((error) => {

            console.log("Error ", error)

        })
}

document.addEventListener('DOMContentLoaded', function() {
    cargarCategorias();
    cargarProductos();

})