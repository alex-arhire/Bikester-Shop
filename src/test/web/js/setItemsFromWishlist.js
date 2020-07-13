const productTable = document.querySelector('.prod-table');

function sendFromWishlist(event) {
    event.preventDefault();
    console.log(event.target);
    if (event.target.classList.contains('cart')) {
        let image = event.target.parentNode.parentNode.childNodes[0].firstChild.getAttribute('src');
        let title = event.target.parentNode.parentNode.childNodes[1].innerText;
        let price = event.target.parentNode.parentNode.childNodes[2].innerText;
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