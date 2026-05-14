/* =========================================================
   BLOG CATEGORY FILTER
========================================================= */

const filterButtons = document.querySelectorAll(".category-btn");

const blogCards = document.querySelectorAll(".blog-card");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        /* REMOVE ACTIVE CLASS */

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");



        /* GET CATEGORY */

        const category = button.getAttribute("data-category");



        /* FILTER BLOGS */

        blogCards.forEach((card) => {

            const cardCategory = card.getAttribute("data-category");

            if(category === "all" || cardCategory === category){

                card.style.display = "block";

            }

            else{

                card.style.display = "none";

            }

        });

    });

});