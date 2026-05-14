// ========================= START: GLOBAL FUNCTIONS =========================

function initializeGlobalFunctions() {

    // ========================= THEME TOGGLE =========================

    const allThemeButtons = document.querySelectorAll(
        "#themeToggle, .mobile-theme-btn"
    );

    allThemeButtons.forEach(button => {

        button.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            allThemeButtons.forEach(btn => {

                const icon = btn.querySelector("i");

                if(icon){

                    if(document.body.classList.contains("dark-mode")) {

                        icon.classList.remove("fa-moon");
                        icon.classList.add("fa-sun");

                    } else {

                        icon.classList.remove("fa-sun");
                        icon.classList.add("fa-moon");

                    }

                }

            });

        });

    });




    // ========================= RTL TOGGLE =========================

    const allRTLButtons = document.querySelectorAll(
        "#rtlToggle, .mobile-rtl-btn"
    );

    allRTLButtons.forEach(button => {

        button.addEventListener("click", () => {

            const currentDir =
            document.documentElement.getAttribute("dir");

            if(currentDir === "rtl") {

                document.documentElement.setAttribute("dir", "ltr");

            } else {

                document.documentElement.setAttribute("dir", "rtl");

            }

        });

    });

}

// ========================= END: GLOBAL FUNCTIONS =========================




// ========================= START: REVEAL ANIMATION =========================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

    reveals.forEach(reveal => {

        const windowHeight = window.innerHeight;

        const revealTop =
        reveal.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            reveal.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ========================= END: REVEAL ANIMATION =========================




/* ========================= FAQ ACCORDION ========================= */

const faqItems = document.querySelectorAll(".faq-item");

if(faqItems.length > 0){

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");

        if(question){

            question.addEventListener("click", () => {

                const answer = item.querySelector(".faq-answer");

                item.classList.toggle("active");

                if(item.classList.contains("active")){

                    answer.style.maxHeight =
                    answer.scrollHeight + "px";

                }else{

                    answer.style.maxHeight = null;

                }

            });

        }

    });

}




/* ========================= INITIALIZE FUNCTIONS ========================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeGlobalFunctions();

});