/*=========================================
        INTERACTIVE NAVIGATION MENU
=========================================*/

// Navbar
const navbar = document.getElementById("navbar");

// Popup
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const exploreBtn = document.getElementById("exploreBtn");

// Back To Top Button
const topBtn = document.getElementById("topBtn");

// Navigation Links
const navLinks = document.querySelectorAll("nav ul li a");

// Sections
const sections = document.querySelectorAll("section");


/*=========================================
        STICKY NAVBAR ON SCROLL
=========================================*/

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});


/*=========================================
        SHOW BACK TO TOP BUTTON
=========================================*/

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


/*=========================================
        BACK TO TOP
=========================================*/

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=========================================
        POPUP
=========================================*/

// Show popup after 2 seconds
window.onload = function () {

    setTimeout(function () {

        popup.classList.add("show");

    }, 2000);

};


// Close popup
closePopup.addEventListener("click", function () {

    popup.classList.remove("show");

});


// Explore button
exploreBtn.addEventListener("click", function () {

    popup.classList.remove("show");

    document.getElementById("about").scrollIntoView({

        behavior: "smooth"

    });

});


// Close popup when clicking outside
window.addEventListener("click", function (e) {

    if (e.target === popup) {

        popup.classList.remove("show");

    }

});


/*=========================================
        SMOOTH NAVIGATION
=========================================*/

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


/*=========================================
        ACTIVE MENU HIGHLIGHT
=========================================*/

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================
        SECTION FADE-IN ON SCROLL
=========================================*/

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});


sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(60px)";

    section.style.transition = "all 1s ease";

    observer.observe(section);

});


/*=========================================
        BUTTON HOVER EFFECT
=========================================*/

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("mouseenter", function () {

        this.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", function () {

        this.style.transform = "scale(1)";

    });

});


/*=========================================
        CONSOLE MESSAGE
=========================================*/

console.log("Interactive Navigation Menu Loaded Successfully!");