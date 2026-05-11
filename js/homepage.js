// ========================= START: DARK MODE TOGGLE =========================
        const themeToggle = document.getElementById('themeToggle');

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            if(document.body.classList.contains('dark-mode')) {
                themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
            } else {
                themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
            }
        });
        // ========================= END: DARK MODE TOGGLE =========================


        // ========================= START: RTL TOGGLE =========================
        const rtlToggle = document.getElementById('rtlToggle');

        rtlToggle.addEventListener('click', () => {
            const html = document.documentElement;

            if(html.getAttribute('dir') === 'ltr') {
                html.setAttribute('dir', 'rtl');
            } else {
                html.setAttribute('dir', 'ltr');
            }
        });
        // ========================= END: RTL TOGGLE =========================


        // ========================= START: FORM SUBMIT ALERT =========================
        const form = document.querySelector('form');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Your eco-friendly cleaning request has been submitted successfully!');
            form.reset();
        });
        // ========================= END: FORM SUBMIT ALERT =========================

