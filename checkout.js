function verif() {
    var nom = document.registerForm.nom.value;
    var prenom = document.registerForm.prenom.value;
    var zip = document.registerForm.zip.value;
    var cvv = document.registerForm.cv.value;
    var cardholder = document.registerForm.cardholder.value;


    var i;
    var nomTest;
    var prenomTest;
    var ageTest;

    if (nom.length == 0) {
        if (document.getElementById("nom1").classList.contains("dispNone")) {
            document.getElementById("nom1").classList.remove("dispNone");
        }
        nomTest = false;
    }
    else {

        if (!(/^[a-zA-Z]+$/.test(nom))) {
            if (document.getElementById("nom1").classList.contains("dispNone")) {
                document.getElementById("nom1").classList.remove("dispNone");
            }
            nomTest = false;
        } else {
            if (!(document.getElementById("nom1").classList.contains("dispNone"))) {
                document.getElementById("nom1").classList.add("dispNone");
            }
            nomTest = true;
        }

    }


    if (cardholder.length == 0) {
        if (document.getElementById("cardholder").classList.contains("cardholder")) {
            document.getElementById("cardholder").classList.remove("cardholder");
        }
        nomTest = false;
    }
    else {

        if (!(/^[a-zA-Z]+$/.test(cardholder))) {
            if (document.getElementById("cardholder").classList.contains("cardholder")) {
                document.getElementById("cardholder").classList.remove("cardholder");
            }
            nomTest = false;
        } else {
            if (!(document.getElementById("cardholder").classList.contains("cardholder"))) {
                document.getElementById("cardholder").classList.add("cardholder");
            }
            nomTest = true;
        }

    }


    if (prenom.length == 0) {
        if (document.getElementById("prenom1").classList.contains("validprenom")) {
            document.getElementById("prenom1").classList.remove("validprenom");
        }
        prenomTest = false;
    }
    else {

        if (!(/^[a-zA-Z]+$/.test(prenom))) {
            if (document.getElementById("prenom1").classList.contains("validprenom")) {
                document.getElementById("prenom1").classList.remove("validprenom");
            }
            prenomTest = false;
        } else {
            if (!(document.getElementById("prenom1").classList.contains("validprenom"))) {
                document.getElementById("prenom1").classList.add("validprenom");
            }
            prenomTest = true;
        }

    }




    if (cvv.length == 0) {
        if (document.getElementById("inputError2").classList.contains("yu")) {
            document.getElementById("inputError2").classList.remove("yu");
        }
        ageTest = false;
    }
    else {

        if (!(/^[0-9]+$/.test(cvv))) {
            if (document.getElementById("inputError2").classList.contains("yu")) {
                document.getElementById("inputError2").classList.remove("yu");
            }
            ageTest = false;
        } else {
            if (!(document.getElementById("inputError2").classList.contains("yu"))) {
                document.getElementById("inputError2").classList.add("yu");
            }
            ageTest = true;
        }

    }



    if (zip.length == 0) {
        if (document.getElementById("zip1").classList.contains("zip")) {
            document.getElementById("zip1").classList.remove("zip");
        }
        ageTest = false;
    }
    else {

        if (!(/^[0-9]+$/.test(zip))) {
            if (document.getElementById("zip1").classList.contains("zip")) {
                document.getElementById("zip1").classList.remove("zip");
            }
            ageTest = false;
        } else {
            if (!(document.getElementById("zip1").classList.contains("zip"))) {
                document.getElementById("zip1").classList.add("zip");
            }
            ageTest = true;
        }

    }




    if (cardnumber.length == 0) {
        if (document.getElementById("cardnumber").classList.contains("cardnumber")) {
            document.getElementById("cardnumber").classList.remove("cardnumber");
        }
        ageTest = false;
    }
    else {

        if (!(/^[0-9]+$/.test(cardnumber))) {
            if (document.getElementById("cardnumber").classList.contains("cardnumber")) {
                document.getElementById("cardnumber").classList.remove("cardnumber");
            }
            ageTest = false;
        } else {
            if (!(document.getElementById("cardnumber").classList.contains("cardnumber"))) {
                document.getElementById("cardnumber").classList.add("cardnumber");
            }
            ageTest = true;
        }

    }



    if (!(nomTest && prenomTest && ageTest)) {
        return false
    } else {
        return true;
    }
}
