function plus() {

    var panier = document.getElementById("cpt");
    var nbr = Number(panier.textContent);
    panier.innerHTML = nbr + 1;


    prix = document.getElementById("prix");
    pr = Number(prix.textContent);

    prix.innerHTML = pr + 25;



    total = document.getElementById("totaleprice");
    nbr = Number(total.textContent);
    total.innerHTML = nbr + 25;



}
function moins() {

    var panier = document.getElementById("cpt");
    var nbr = Number(panier.textContent);
    if (nbr > 1) {
        panier.innerHTML = nbr - 1;
    }



    prix = document.getElementById("prix");
    pr = Number(prix.textContent);
    if (pr > 25) {
        prix.innerHTML = pr - 25;
    }


    total = document.getElementById("totaleprice");
    nbr = Number(total.textContent);
    if (nbr > 25) {
        total.innerHTML = nbr - 25;
    }

}

function verif() {

    var b = document.getElementById("tetnaha").remove();
    var a = document.getElementById("vide");
    if (a.classList.contains("alertt")) {
        a.classList.remove("alertt");

    }


    total = document.getElementById("totaleprice");
    nbr = Number(total.textContent);
    total.innerHTML = nbr - nbr;
}




