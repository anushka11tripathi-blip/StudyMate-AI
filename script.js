// =========================
// MOBILE MENU TOGGLE
// =========================

function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("show");
}

// =========================
// CLOSE MENU AFTER CLICKING
// =========================

const mobileLinks = document.querySelectorAll("#mobileMenu a");

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        document
            .getElementById("mobileMenu")
            .classList.remove("show");
    });
});

// =========================
// SMOOTH SCROLL FOR NAV LINKS
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});

// =========================
// HERO BUTTON ACTIONS
// =========================

const getStartedBtn = document.querySelector(".primary-btn");
const learnMoreBtn = document.querySelector(".secondary-btn");

if (getStartedBtn) {
    getStartedBtn.addEventListener("click", () => {
        document
            .querySelector("#features")
            .scrollIntoView({
                behavior: "smooth"
            });
    });
}

if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", () => {
        document
            .querySelector("#about")
            .scrollIntoView({
                behavior: "smooth"
            });
    });
}

// =========================
// CTA BUTTON ACTION
// =========================

const ctaBtn = document.querySelector(".cta-btn");

if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
        document
            .querySelector("#features")
            .scrollIntoView({
                behavior: "smooth"
            });
    });
}