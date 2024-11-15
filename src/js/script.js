const nav = document.querySelector(".menu");
const toggle = document.querySelector(".menu-btn");


toggle.addEventListener("click", (event) => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    toggle.ariaExpanded = isClosed;
    nav.ariaHidden = isOpen;
    document.body.classList.toggle("noscroll",isOpen);
});