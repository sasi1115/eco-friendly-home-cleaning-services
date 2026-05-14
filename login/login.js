

/* =========================================================
   PASSWORD TOGGLE
========================================================= */

const eye = document.getElementById('eye');

const password =
document.getElementById('password');

eye.addEventListener('click',()=>{

    if(password.type === 'password'){

        password.type = 'text';

        eye.classList.remove('fa-eye');

        eye.classList.add('fa-eye-slash');

    }

    else{

        password.type = 'password';

        eye.classList.remove('fa-eye-slash');

        eye.classList.add('fa-eye');

    }

});

/* =========================================================
   LOADING BUTTON
========================================================= */

const loginBtn =
document.getElementById('loginBtn');

const spinner =
document.getElementById('spinner');

const btnText =
document.getElementById('btnText');

loginBtn.addEventListener('click',()=>{

    btnText.style.display = 'none';

    spinner.style.display = 'block';

    setTimeout(()=>{

        spinner.style.display = 'none';

        btnText.innerHTML = 'Success ✓';

        btnText.style.display = 'block';

    },2000);

});

/* =========================================================
   DARK MODE
========================================================= */

const themeBtn =
document.getElementById('themeBtn');

const themeIcon =
themeBtn.querySelector('i');

themeBtn.addEventListener('click',()=>{

    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')){

        themeIcon.classList.remove('fa-moon');

        themeIcon.classList.add('fa-sun');

    }

    else{

        themeIcon.classList.remove('fa-sun');

        themeIcon.classList.add('fa-moon');

    }

});

/* =========================================================
   RTL TOGGLE
========================================================= */

const rtlBtn =
document.getElementById('rtlBtn');

rtlBtn.addEventListener('click',()=>{

    if(document.body.dir === 'rtl'){

        document.body.dir = 'ltr';

        rtlBtn.innerHTML = 'RTL';

    }

    else{

        document.body.dir = 'rtl';

        rtlBtn.innerHTML = 'LTR';

    }

});

