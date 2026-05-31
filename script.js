// ================================
// Smooth Scrolling
// ================================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (targetId !== "#") {
            e.preventDefault();

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});


// ================================
// Cart Functionality
// ================================

let cartCount = localStorage.getItem("cartCount") || 0;

const cartCounter = document.getElementById("cart-count");

if (cartCounter) {
    cartCounter.textContent = cartCount;
}

const addToCartButtons = document.querySelectorAll(".card button");

addToCartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        localStorage.setItem("cartCount", cartCount);

        if (cartCounter) {
            cartCounter.textContent = cartCount;
        }

        alert("Coffee added to cart ");
    });

});


// ================================
// Hero Buttons
// ================================

const heroBtns = document.querySelectorAll(".hero-buttons button");

if (heroBtns.length > 0) {

    // Order Now Button
    heroBtns[0].addEventListener("click", () => {

        document.querySelector(".featured").scrollIntoView({
            behavior: "smooth"
        });

    });

    // Explore Menu Button
    heroBtns[1].addEventListener("click", () => {

        document.querySelector(".featured").scrollIntoView({
            behavior: "smooth"
        });

    });
}


// ================================
// View Full Menu Button
// ================================

const viewMenuBtn = document.querySelector(".view-menu-link");

if (viewMenuBtn) {

    viewMenuBtn.addEventListener("click", (e) => {

        e.preventDefault();

        alert("Menu Page Coming Soon!");

        // Later:
        // window.location.href = "menu.html";

    });

}


// ================================
// Contact Form
// ================================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name =
            contactForm.querySelector('input[name="name"]').value.trim();

        const email =
            contactForm.querySelector('input[name="email"]').value.trim();

        const message =
            contactForm.querySelector('textarea[name="message"]').value.trim();

        if (!name || !email || !message) {

            alert("Please fill all fields.");

            return;
        }

        alert(`Thank you ${name}! Your message has been sent successfully.`);

        contactForm.reset();

    });

}


// ================================
// Login Button
// ================================

const loginBtn = document.querySelector(".login-btn");

if (loginBtn) {

    loginBtn.addEventListener("click", (e) => {

        e.preventDefault();

        alert("Redirecting to Login Page...");

        // Later:
        // window.location.href = "login.html";

    });

}


// ================================
// Cart Icon Click
// ================================

const cartIcon = document.querySelector(".fa-cart-shopping");

if (cartIcon) {

    cartIcon.addEventListener("click", () => {

        alert(`You have ${cartCount} item(s) in your cart.`);

    });

}


// ================================
// Navbar Shadow on Scroll
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 15px rgba(0,0,0,0.15)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


// ================================
// Welcome Message
// ================================

window.addEventListener("load", () => {

    console.log("Welcome to BeanByte ");

});