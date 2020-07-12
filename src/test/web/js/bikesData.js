const products = document.querySelector('.products-template');

function loadProducts() {
    const request = new XMLHttpRequest();
    request.open("get", "./../data/bikesData.json");
    request.onload = function () {
        try {
            const json = JSON.parse(request.responseText);
            populateProducts(json);
        } catch (e) {
            console.log("Could not load products");
        }
    };
    request.send();
}

function populateProducts(json) {
//Populate with data
    for (var i = 0; i < json.length; i++) {
        var object = json[i];

        for (var j in object) {
            var div = document.createElement('div');
            div.className = 'tile';

            var img = document.createElement('img');
            img.src = object.img;
            div.appendChild(img);

            var a = document.createElement('a');
            a.textContent = object["prod-name"];
            a.href = '#';
            div.appendChild(a);

            var price = document.createElement('span');
            price.textContent = object.price;
            price.className = 'prod-price';
            div.appendChild(price);

            var buttonCart = document.createElement('button');
            buttonCart.className = 'cart';
            buttonCart.textContent = 'Add to Cart';
            div.appendChild(buttonCart);

            var buttonWishlist = document.createElement('button');
            buttonWishlist.className = 'wishlist';
            buttonWishlist.textContent = 'Add to Wishlist';
            div.appendChild(buttonWishlist);
        }
        products.appendChild(div);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    loadProducts();
});



