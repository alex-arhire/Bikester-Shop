/*Handler for retrieving data from LOCAL STORAGE for both wishlist and shopping cart pages*/

const tableItems = document.querySelector('.prod-table > tbody');

function loadProducts() {

    var storage;
    if(window.location.href === "http://localhost:8080/wishlist.html") {
        storage = JSON.parse(localStorage.getItem('prodForWishlist'));

    } else if (window.location.href === "http://localhost:8080/cartCheckout.html") {
        storage = JSON.parse(localStorage.getItem('prodForCart'));
    }
    console.log(storage);
    storage.forEach(item => {
       console.log(item);
        var tr = document.createElement('tr');
        tr.className = 'cart-item';

        var td = document.createElement('td');
        var img = document.createElement('img');
        img.src = item.image;
        td.appendChild(img);
        tr.appendChild(td);

        td = document.createElement('td');
        var a = document.createElement('a');
        a.textContent = item.title;
        a.href = '#';
        td.appendChild(a);
        tr.appendChild(td);

        td = document.createElement('td');
        var price = document.createElement('a');
        price.textContent = item.price;
        td.className = 'prod-price';
        td.appendChild(price);
        tr.appendChild(td);

        td = document.createElement('td');
        var qt = document.createElement('input');
        qt.type = 'number';
        qt.value = '1';
        qt.setAttribute('min', '1');
        td.appendChild(qt);
        tr.appendChild(td);

        if (window.location.href === "http://localhost:8080/wishlist.html") {
            td = document.createElement('td');
            td.className = 'add-cart';
            var buttonCart = document.createElement('button');
            buttonCart.className = 'cart';
            buttonCart.textContent = 'Add to Cart';
            td.appendChild(buttonCart);
            tr.appendChild(td);
        }

        td = document.createElement('td');
        var buttonRemove = document.createElement('a');
        buttonRemove.href = '#';
        td.className = 'prod-remove';
        td.appendChild(buttonRemove);
        tr.appendChild(td);

        tableItems.appendChild(tr);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    loadProducts();
});



