function addToCart(title) {
    var cartNumber = document.getElementById("shopCartNumber");
    var nbr = Number(cartNumber.textContent);
    cartNumber.innerHTML = nbr + 1;
    // ou textContent //
    if (cartNumber.classList.contains("badge-primary")) {
        cartNumber.classList.remove("badge-primary");
        cartNumber.classList.add("badge-warning");
    }
var modalBody = document.getElementById("modalBody")
modalBody.textContent= title+" a été ajouter a votre panier";
}