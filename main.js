const toggleButton= document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const backdrop = document.querySelector(".backdrop");

toggleButton.addEventListener("click", function() {
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
});

backdrop.addEventListener("click", function(){
    mobileNav.classList.remove("open");
    backdrop.classList.remove("open");
})