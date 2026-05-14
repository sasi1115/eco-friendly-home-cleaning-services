/* =========================================================
   PRICING PAGE SCRIPT
========================================================= */


/* =========================================================
   WAIT UNTIL PAGE LOADS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {



    /* =========================================================
       NAVBAR / FOOTER COMPONENT LOAD
    ========================================================= */

    loadComponent(
        "#navbar",
        "../components/navbar.html"
    );

    loadComponent(
        "#footer",
        "../components/footer.html"
    );



    /* =========================================================
       PLAN TOGGLE BUTTONS
    ========================================================= */

    const toggleButtons =
    document.querySelectorAll(".plan-toggle-buttons button");



    const pricingCards =
    document.querySelectorAll(".pricing-card");



    const pricingData = {

        oneTime: ["$89", "$149", "$199"],

        weekly: ["$69", "$119", "$169"],

        monthly: ["$79", "$129", "$179"]
    };



    toggleButtons.forEach((button, index) => {

        button.addEventListener("click", () => {



            /* ========================= REMOVE ACTIVE ========================= */

            toggleButtons.forEach(btn => {

                btn.classList.remove("active");

            });



            /* ========================= ADD ACTIVE ========================= */

            button.classList.add("active");



            /* ========================= GET MODE ========================= */

            let mode = "oneTime";



            if(index === 1){

                mode = "weekly";
            }

            else if(index === 2){

                mode = "monthly";
            }



            /* ========================= UPDATE PRICES ========================= */

            pricingCards.forEach((card, cardIndex) => {

                const price =
                card.querySelector(".plan-price");

                if(price){

                    price.textContent =
                    pricingData[mode][cardIndex];
                }

            });

        });

    });





    /* =========================================================
       FAQ ACCORDION
    ========================================================= */

    const faqQuestions =
    document.querySelectorAll(".pricing-faq-question");



    faqQuestions.forEach(question => {

        question.addEventListener("click", () => {

            const item =
            question.parentElement;



            item.classList.toggle("active");



            const icon =
            question.querySelector("span");



            if(item.classList.contains("active")){

                icon.textContent = "−";
            }

            else{

                icon.textContent = "+";
            }

        });

    });





    /* =========================================================
       PRICE CALCULATOR
    ========================================================= */

    const homeSelect =
    document.querySelectorAll(".calculator-form select")[0];



    const planSelect =
    document.querySelectorAll(".calculator-form select")[1];



    const checkboxes =
    document.querySelectorAll(
        ".calculator-form input[type='checkbox']"
    );



    const totalPrice =
    document.querySelector(".calculator-total span");



    function calculatePrice(){



        /* ========================= BASE PRICE ========================= */

        let total = 0;



        /* ========================= HOME SIZE ========================= */

        const homeValue =
        homeSelect.selectedIndex;



        if(homeValue === 1){

            total += 89;
        }

        else if(homeValue === 2){

            total += 119;
        }

        else if(homeValue === 3){

            total += 149;
        }



        /* ========================= PLAN ========================= */

        const planValue =
        planSelect.selectedIndex;



        if(planValue === 1){

            total += 0;
        }

        else if(planValue === 2){

            total += 60;
        }

        else if(planValue === 3){

            total += 110;
        }



        /* ========================= ADDONS ========================= */

        if(checkboxes[0].checked){

            total += 40;
        }



        if(checkboxes[1].checked){

            total += 30;
        }



        /* ========================= DEFAULT ========================= */

        if(total === 0){

            totalPrice.textContent = "$0";
        }

        else{

            totalPrice.textContent =
            `$${total}`;
        }

    }



    /* ========================= EVENTS ========================= */

    homeSelect.addEventListener(
        "change",
        calculatePrice
    );



    planSelect.addEventListener(
        "change",
        calculatePrice
    );



    checkboxes.forEach(box => {

        box.addEventListener(
            "change",
            calculatePrice
        );

    });





    /* =========================================================
       FORM SUBMIT
    ========================================================= */

    const calculatorForm =
    document.querySelector(".calculator-form");



    calculatorForm.addEventListener("submit", (e) => {

        e.preventDefault();



        alert(
            "Your eco cleaning plan has been booked successfully!"
        );

    });





    /* =========================================================
       DARK MODE TOGGLE
    ========================================================= */

    const darkModeButton =
    document.querySelector(".theme-toggle");



    if(darkModeButton){

        darkModeButton.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");



            const icon =
            darkModeButton.querySelector("i");



            if(document.body.classList.contains("dark-mode")){

                icon.classList.remove("fa-moon");

                icon.classList.add("fa-sun");
            }

            else{

                icon.classList.remove("fa-sun");

                icon.classList.add("fa-moon");
            }

        });

    }





    /* =========================================================
       SMOOTH ACTIVE ANIMATION
    ========================================================= */

    const cards =
    document.querySelectorAll(
        ".pricing-card, .addon-card, .included-service-card"
    );



    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
            "translateY(-10px)";
        });



        card.addEventListener("mouseleave", () => {

            card.style.transform =
            "translateY(0)";
        });

    });

});





/* =========================================================
   LOAD COMPONENT FUNCTION
========================================================= */

function loadComponent(selector, file){



    fetch(file)

    .then(response => response.text())

    .then(data => {

        const element =
        document.querySelector(selector);



        if(element){

            element.innerHTML = data;
        }

    })

    .catch(error => {

        console.error(
            "Component Load Error:",
            error
        );

    });

}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});