// ========================= START: LOAD NAVBAR =========================
// ========================= LOAD NAVBAR =========================

fetch('../components/navbar.html')

.then(response => response.text())

.then(data => {

    document.getElementById('navbar').innerHTML = data;

    // ========================= MOBILE MENU =========================

    const mobileMenu = document.querySelector(".mobile-menu");

    const mobileNav = document.querySelector(".mobile-nav");

    mobileMenu.addEventListener("click", () => {

        mobileNav.classList.toggle("active");

    });

    // ========================= MOBILE ACTIVE LINK =========================

const mobileLinks = document.querySelectorAll(".mobile-nav a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});
    // ========================= INITIALIZE GLOBAL FUNCTIONS =========================

    initializeGlobalFunctions();

});


// ========================= END: LOAD NAVBAR =========================




// ========================= START: LOAD FOOTER =========================

fetch('../components/footer.html')
.then(response => response.text())
.then(data => {

    document.getElementById('footer').innerHTML = data;

});

// ========================= END: LOAD FOOTER =========================
