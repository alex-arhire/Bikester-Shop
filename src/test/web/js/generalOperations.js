// if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', ready)
// } else {
//     ready();
// }

// function ready() {
// }

/*Removing items from cart/wishlist*/

// var removeItemsButtons = document.getElementsByClassName('prod-remove');
// for (var i = 0; i < removeItemsButtons.length; i++) {
//     var button = removeItemsButtons[i];
//     button.addEventListener("click", function (event) {
//         var buttonClicked = event.target;
//         buttonClicked.parentElement.remove();
//     });
// }

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

/*Calculating total*/
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

