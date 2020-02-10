                /* filter js */
filter("all");

function filter(c) {
    var element = document.getElementsByClassName("mydiv");
    if (c != "all") {
        for (i = 0; i < element.length; i++) {
            if (!element[i].classList.contains(c)) {
                element[i].classList.add('dispnone')
            } else {
                if (element[i].classList.contains('dispnone')) {
                    element[i].classList.remove('dispnone')
                }
            }
        }
    } else {
        for (i = 0; i < element.length; i++) {
            if (element[i].classList.contains('dispnone')) {
                element[i].classList.remove('dispnone');
            }
        }
    }
}