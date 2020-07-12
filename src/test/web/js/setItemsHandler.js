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

function distributeItems(event) {
    event.preventDefault();
    console.log(event.target);

    if(event.target.classList.contains('wishlist') /*|| event.target.classList.contains('cart')*/ ) {
        var image = event.target.parentNode.childNodes[0].getAttribute('src');
        var title = event.target.parentNode.childNodes[1].innerHTML;
        var price = event.target.parentNode.childNodes[2].innerHTML;
        var storageHistory = JSON.parse(localStorage.getItem("prodValues")) || [];
        let items = {
            image,
            title,
            price
        };
        storageHistory.push(items);
        localStorage.setItem("prodValues", JSON.stringify(storageHistory));

        // window.location.href = 'http://localhost:8080/wishlistJSON.html';
    } else if (event.target.tagName.includes('IMG') || event.target.tagName.includes('A') || event.target.tagName.includes('SPAN')) {
        window.location.href = 'http://localhost:8080/productDetails.html';
    }
}

products.addEventListener('click', distributeItems);


