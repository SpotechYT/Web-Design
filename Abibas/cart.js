var cart = document.getElementById("cart");
var cartBkg = document.getElementById("cartBkg");
var itemsCount = document.getElementById("items-count");
var itemsInCart = document.getElementById("items-in-cart");
var count = itemsInCart.getElementsByClassName('cart-item').length;

function openCart() {
    if (cart.style.visibility == "hidden"){
        cart.style.visibility = "visible";
        cartBkg.style.visibility = "visible";
        document.body.style.overflowY = "hidden";
    }
    else {
        cart.style.visibility = "hidden";
        cartBkg.style.visibility = "hidden";
        document.body.style.overflowY = "auto";
    }
}

function updateCartCount(){
    itemsCount.innerHTML = itemsInCart.getElementsByClassName('cart-item').length;
}

function addItem(name, price, image) {
    var newItem = document.createElement("DIV");
    newItem.setAttribute("class", "cart-item");
    newItem.setAttribute("id", name);
    
    newItem.innerHTML = "<img src=" + image + "><div id='item-info'><div><b><p id='item-name'>" + name + "</p><p id='item-price'>" + price + "</p></b></div><div><button class='item-remove' style='background: #f7f7f7; border: none; border-radius: 25px;' onclick='removeItem(this.parentElement.parentElement.parentElement);'><i class='fa fa-trash'></i></button></div></div>";

    itemsInCart.appendChild(newItem);
    updateCartCount();
}

function removeItem(itemGiven) {
    itemGiven.remove();
    updateCartCount();
}
