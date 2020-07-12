// if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', ready)
// } else {
//     ready();
// }

// function ready() {
// }
const products = document.querySelector('.prod-table > tbody');

function loadProducts() {
    var storage = JSON.parse(localStorage.getItem('prodValues'));
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

        if (window.location.href === "http://localhost:8080/wishlistJSON.html") {
            td = document.createElement('td');
            var buttonCart = document.createElement('button');
            td.className = 'add-cart';
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

        products.appendChild(tr);
    });

}

document.addEventListener("DOMContentLoaded", function () {
    loadProducts();
});

var removeItemsButtons = document.getElementsByClassName('prod-remove');
for (let i = 0; i < removeItemsButtons.length; i++) {
    var button = removeItemsButtons[i];
    console.log(button);
    button.addEventListener("click", removeCartItem);
}

var qtyInputs = document.getElementsByClassName('quantity');
for (let i = 0; i < qtyInputs.length; i++) {
    let input = qtyInputs[i];
    input.addEventListener('change', qtyChanged);
}

function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

function qtyChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

function updateTotal() {
    let cartItem = document.getElementsByClassName('cart-item');
    let total = 0;
    for (var i = 0; i < cartItem.length; i++) {
        var cartData = cartItem[i];
        var price = parseFloat(cartData.getElementsByClassName('prod-price')[0].innerText.replace('$', ''));
        var quantity = cartData.getElementsByClassName('quantity')[0].valueAsNumber;
        console.log(price * quantity);
        total += (price * quantity);
    }
    document.getElementsByClassName('total-price')[0].innerText = '$' + total;
}

// function clearProducts() {
//     //Clearing existing data
//     if (products.length > 0) {
//         for (var k = 0; k < products.length; k++) {
//             products[k].remove();
//         }
//     } else {
//         console.warn("No products available");
//     }
// }
//
// function populateProducts(json) {
//
//     for (var i = 0; i < json.length; i++) {
//         var object = json[i];
//         console.log(object);
//
//         for (var j in object) {
//             var tr = document.createElement('tr');
//             tr.className = 'cart-item';
//
//             var td = document.createElement('td');
//             var img = document.createElement('img');
//             img.src = object.img;
//             td.appendChild(img);
//             tr.appendChild(td);
//
//             td = document.createElement('td');
//             var a = document.createElement('a');
//             a.textContent = object["prod-name"];
//             a.href = '#';
//             td.appendChild(a);
//             tr.appendChild(td);
//
//             td = document.createElement('td');
//             var qt = document.createElement('input');
//             qt.type = 'number';
//             td.appendChild(qt);
//             tr.appendChild(td);
//
//             td = document.createElement('td');
//             var price = document.createElement('a');
//             price.textContent = object.price;
//             td.className = 'prod-price';
//             td.appendChild(price);
//             tr.appendChild(td);
//
//             td = document.createElement('td');
//             var stock = document.createElement('span');
//             stock.textContent = object.stock;
//             td.appendChild(stock);
//             tr.appendChild(td);
//
//             td = document.createElement('td');
//             var buttonCart = document.createElement('button');
//             td.className = 'add-cart';
//             buttonCart.textContent = 'Add to Cart';
//             td.appendChild(buttonCart);
//             tr.appendChild(td);
//
//             td = document.createElement('td');
//             var buttonRemove = document.createElement('a');
//             buttonRemove.href = '#';
//             td.className = 'prod-remove';
//             td.appendChild(buttonRemove);
//             tr.appendChild(td);
//         }
//         products.appendChild(tr);
//     }
//     tr = document.createElement('tr');
//     tr.className = 'cart-item';
//     td = document.createElement('td');
//     var total = document.createElement('span');
//     td.className = 'total';
//     td.appendChild(total);
//     tr.appendChild(td);
//     products.appendChild(tr);
//
// }
