/*Removing items from cart/wishlist*/

var removeItemsButtons = document.getElementsByClassName('prod-remove');
for (var i = 0; i < removeItemsButtons.length; i++) {
    var button = removeItemsButtons[i];
    button.addEventListener("click", function (event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.remove();
    });
}

/*Adding items to cart/wishlist*/
function addItem() {
    var newRow = document.createElement('tr');
    var newCell = document.createElement('td');
    var newAnchor = document.createElement('a');
    var newImg = document.createElement('img');
    var newInput = document.createElement('input');

}
