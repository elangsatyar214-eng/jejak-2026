// ==========================================
// SELECT ALL NAVBAR BUTTONS
// ==========================================

const navButtons = document.querySelectorAll(".nav-button");


// ==========================================
// SELECT ALL PAGE SECTIONS
// ==========================================

const pageSections = document.querySelectorAll(".page-section");


// ==========================================
// NAVIGATION SYSTEM
// ==========================================

navButtons.forEach(button => {

    button.addEventListener("click", (event) => {

        // Prevent page refresh
        event.preventDefault();



        // ==================================
        // REMOVE ACTIVE NAVBAR
        // ==================================

        navButtons.forEach(btn => {

            btn.classList.remove("active");

        });



        // ==================================
        // ADD ACTIVE NAVBAR
        // ==================================

        button.classList.add("active");



        // ==================================
        // GET TARGET SECTION
        // ==================================

        const targetSection =
        button.getAttribute("data-section");



        // ==================================
        // HIDE ALL SECTIONS
        // ==================================

        pageSections.forEach(section => {

            section.classList.remove("active-section");

        });



        // ==================================
        // SHOW TARGET SECTION
        // ==================================

        const activeSection =
        document.getElementById(targetSection);

        activeSection.classList.add("active-section");



        // ==================================
        // SCROLL TO TOP SMOOTHLY
        // ==================================

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});





// ==========================================
// FADE-UP ANIMATION ON SCROLL
// ==========================================

const fadeElements =
document.querySelectorAll(".fade-up");



function showOnScroll() {

    fadeElements.forEach(element => {

        const elementTop =
        element.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;



        // Trigger animation
        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}



// Run animation on scroll
window.addEventListener("scroll", showOnScroll);



// Run animation on first load
showOnScroll();