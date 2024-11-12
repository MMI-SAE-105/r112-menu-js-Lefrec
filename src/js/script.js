// On cible les éléments à modifier
const toggle = document.querySelector(".menu");
const nav = document.querySelector(".menu-btn");

// Ajoute un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.
toggle.addEventListener("click", (event) => {
    // Mise à jour des attributs ARIA pour accessibilité
    nav.ariaExpanded = true;
    toggle.ariaHidden = false;
});