/*Handler for pushing data into LOCAL STORAGE for both wishlist and shopping cart pages*/
// const wishlistBtn = document.querySelectorAll('.wihslist');
// const cartBtn = document.querySelectorAll('.cart');
// const productTable = document.querySelector('.prod-table');

/*function distributeItems(event) {
    event.preventDefault();
    console.log(event.target);

    // if (window.location.href === 'http://localhost:8080/bikes.html' || 'http://localhost:8080/equipment.html' || 'http://localhost:8080/components.html') {
        if (event.target.classList.contains('wishlist') /!*|| event.target.classList.contains('cart')*!/) {
            let image = event.target.parentNode.childNodes[0].getAttribute('src');
            let title = event.target.parentNode.childNodes[1].innerHTML;
            let price = event.target.parentNode.childNodes[2].innerHTML;
            let wishlistStorage = JSON.parse(localStorage.getItem("prodForWishlist")) || [];
            let items = {
                image,
                title,
                price
            };
            wishlistStorage.push(items);
            localStorage.setItem("prodForWishlist", JSON.stringify(wishlistStorage));

        } else if (event.target.classList.contains('cart')) {
            let image = event.target.parentNode.childNodes[0].getAttribute('src');
            let title = event.target.parentNode.childNodes[1].innerHTML;
            let price = event.target.parentNode.childNodes[2].innerHTML;
            let cartStorage = JSON.parse(localStorage.getItem("prodForCart")) || [];
            let items = {
                image,
                title,
                price
            };
            cartStorage.push(items);
            localStorage.setItem("prodForCart", JSON.stringify(cartStorage));

        } else if (event.target.tagName.includes('IMG') || event.target.tagName.includes('A') || event.target.tagName.includes('SPAN')) {
            window.location.href = 'http://localhost:8080/productDetails.html';
        }
    // } else if (window.location.href === 'http://localhost:8080/wishlist.html') {
    //     const products = document.querySelector('.products-template');
    //
    // }
}

products.addEventListener('click', distributeItems);*/

function distributeItems2() {
    if (window.location.href === 'http://localhost:8080/bikes.html' || 'http://localhost:8080/equipment.html' || 'http://localhost:8080/components.html') {
        const productsDiv = document.querySelector('.products-template');

        function sendFromProdPages(event) {
            event.preventDefault();
            console.log(event.target);
            if (event.target.classList.contains('wishlist') /*|| event.target.classList.contains('cart')*/) {
                let image = event.target.parentNode.childNodes[0].getAttribute('src');
                let title = event.target.parentNode.childNodes[1].innerHTML;
                let price = event.target.parentNode.childNodes[2].innerHTML;
                let wishlistStorage = JSON.parse(localStorage.getItem("prodForWishlist")) || [];
                let items = {
                    image,
                    title,
                    price
                };
                wishlistStorage.push(items);
                localStorage.setItem("prodForWishlist", JSON.stringify(wishlistStorage));

            } else if (event.target.classList.contains('cart')) {
                let image = event.target.parentNode.childNodes[0].getAttribute('src');
                let title = event.target.parentNode.childNodes[1].innerHTML;
                let price = event.target.parentNode.childNodes[2].innerHTML;
                let cartStorage = JSON.parse(localStorage.getItem("prodForCart")) || [];
                let items = {
                    image,
                    title,
                    price
                };
                cartStorage.push(items);
                localStorage.setItem("prodForCart", JSON.stringify(cartStorage));

            } else if (event.target.tagName.includes('IMG') || event.target.tagName.includes('A') || event.target.tagName.includes('SPAN')) {
                window.location.href = 'http://localhost:8080/productDetails.html';
            }
        }

        productsDiv.addEventListener('click', sendFromProdPages);

    } else if (window.location.href === 'http://localhost:8080/wishlist.html') {
        const productTable = document.querySelector('.prod-table');

        function sendFromWishlist(event) {
            event.preventDefault();
            console.log(event.target);
            if (event.target.classList.contains('cart')) {
                let image = event.target.parentNode.childNodes[0].getAttribute('src');
                let title = event.target.parentNode.childNodes[1].innerHTML;
                let price = event.target.parentNode.childNodes[2].innerHTML;
                let cartStorage = JSON.parse(localStorage.getItem("prodForCart")) || [];
                let items = {
                    image,
                    title,
                    price
                };
                cartStorage.push(items);
                localStorage.setItem("prodForCart", JSON.stringify(cartStorage));
            }
        }
        productTable.addEventListener('click', sendFromWishlist);
    }
}

document.addEventListener('DOMContentLoaded', distributeItems2);