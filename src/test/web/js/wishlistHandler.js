if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready() {
    var removeItemsButtons = document.getElementsByClassName('prod-remove');
    for (let i = 0; i < removeItemsButtons.length; i++) {
        var button = removeItemsButtons[i];
        button.addEventListener("click", removeCartItem);
    }

    var qtyInputs = document.getElementsByClassName('quantity');
    for (let i = 0; i < qtyInputs.length; i++) {
        var input = qtyInputs[i];
        input.addEventListener('change', qtyChanged);
    }

}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

function qtyChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

function updateTotal() {
    var cartItem = document.getElementsByClassName('cart-item');
    var total = 0;
    for (var i = 0; i < cartItem.length; i++) {
        var cartData = cartItem[i];
        var price = parseFloat(cartData.getElementsByClassName('prod-price')[0].innerText.replace('$', ''));
        var quantity = cartData.getElementsByClassName('quantity')[0].valueAsNumber;
        console.log(price * quantity);
        total += (price * quantity);
    }
    document.getElementsByClassName('total-price')[0].innerText = '$' + total;
}


const products = document.querySelector('.wishlist-table > tbody');

function loadProducts() {
    const request = new XMLHttpRequest();
    request.open("get", "./../data/wishlistData2.json");
    request.onload = function () {
        try {
            const json = JSON.parse(request.responseText);
            // clearProducts();
            populateProducts(json);
            ready();
        } catch (e) {
            console.log("Could not load products");
        }
    };
    request.send();
}

function clearProducts() {
    //Clearing existing data
    if (products.length > 0) {
        for (var k = 0; k < products.length; k++) {
            products[k].remove();
        }
    } else {
        console.warn("No products available");
    }
}

function populateProducts(json) {

    //Populate with data
    for (var i = 0; i < json.length; i++) {
        var object = json[i];
        console.log(object);

        for (var j in object) {
            var tr = document.createElement('tr');
            tr.className = 'cart-item';
            /*for(var j in object) {
                var prop = object[j];
                var td = document.createElement('td');
                if (j === "img") {
                    var img = document.createElement('img');
                    img.src = prop;
                }
                td.appendChild(img);
            }*/
            var td = document.createElement('td');
            var img = document.createElement('img');
            img.src = object.img;
            td.appendChild(img);
            tr.appendChild(td);

            td = document.createElement('td');
            var a = document.createElement('a');
            a.textContent = object["prod-name"];
            a.href = '#';
            td.appendChild(a);
            tr.appendChild(td);

            td = document.createElement('td');
            var qt = document.createElement('input');
            qt.type = 'number';
            td.appendChild(qt);
            tr.appendChild(td);

            td = document.createElement('td');
            var price = document.createElement('a');
            price.textContent = object.price;
            td.className = 'prod-price';
            td.appendChild(price);
            tr.appendChild(td);

            td = document.createElement('td');
            var stock = document.createElement('span');
            stock.textContent = object.stock;
            td.appendChild(stock);
            tr.appendChild(td);

            td = document.createElement('td');
            var buttonCart = document.createElement('button');
            td.className = 'add-cart';
            buttonCart.textContent = 'Add to Cart';
            td.appendChild(buttonCart);
            tr.appendChild(td);

            td = document.createElement('td');
            var buttonRemove = document.createElement('a');
            buttonRemove.href = '#';
            td.className = 'prod-remove';
            td.appendChild(buttonRemove);
            tr.appendChild(td);
        }
        products.appendChild(tr);


    }
    tr = document.createElement('tr');
    tr.className = 'cart-item';
    td = document.createElement('td');
    var total = document.createElement('span');
    td.className = 'total';
    td.appendChild(total);
    tr.appendChild(td);
    products.appendChild(tr);

}

document.addEventListener("DOMContentLoaded", function () {
    loadProducts();
});
