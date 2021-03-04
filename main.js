const toggleButton= document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const backdrop = document.querySelector(".backdrop");
const aboutLink = document.querySelector(".about-link");
const portfolioLink = document.querySelector(".portfolio-link");
const contactLink = document.querySelector(".contact-link");


toggleButton.addEventListener("click", function() {
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
});

function closeSideBar() {
    mobileNav.classList.remove("open");
    backdrop.classList.remove("open");
}

backdrop.addEventListener("click", closeSideBar);
aboutLink.addEventListener("click", closeSideBar);
portfolioLink.addEventListener("click", closeSideBar);
contactLink.addEventListener("click", closeSideBar);