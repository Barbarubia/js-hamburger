// definisco la variabile bottone per aprire il menu Hamburger
let btnOpenHamburger = document.querySelector('.fa-bars');

// definisco la variabile bottone per chiudere il menu Hamburger
let btnCloseHamburger = document.querySelector('.close');

// seleziono la variabile div che deve modificare il suo comportamento (show/hide) al click sui bottoni
let hamburgerMenu = document.querySelector('.hamburger-menu');


// EVENTI

// Apro il menu Hamburger
btnOpenHamburger.addEventListener('click', function() {
    hamburgerMenu.classList.add('active');
}
);

// Chiudo il menu Hamburger
btnCloseHamburger.addEventListener('click', function () {
    hamburgerMenu.classList.remove('active');
}
);