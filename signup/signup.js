

/* =========================================================
   PASSWORD TOGGLE
========================================================= */

function togglePassword(eyeId,inputId){

    const eye = document.getElementById(eyeId);

    const input = document.getElementById(inputId);

    eye.addEventListener('click',()=>{

        if(input.type === 'password'){

            input.type = 'text';

            eye.classList.remove('fa-eye');

            eye.classList.add('fa-eye-slash');

        }

        else{

            input.type = 'password';

            eye.classList.remove('fa-eye-slash');

            eye.classList.add('fa-eye');

        }

    });

}

togglePassword('eye1','password');
togglePassword('eye2','confirmPassword');

/* =========================================================
   PASSWORD STRENGTH
========================================================= */

const password =
document.getElementById('password');

const strengthFill =
document.getElementById('strengthFill');

const strengthText =
document.getElementById('strengthText');

password.addEventListener('input',()=>{

    const value = password.value;

    if(value.length < 4){

        strengthFill.style.width = '25%';
        strengthFill.style.background = 'red';

        strengthText.innerHTML = 'Weak Password';
    }

    else if(value.length < 8){

        strengthFill.style.width = '60%';
        strengthFill.style.background = 'orange';

        strengthText.innerHTML = 'Medium Password';
    }

    else{

        strengthFill.style.width = '100%';
        strengthFill.style.background = '#70e000';

        strengthText.innerHTML = 'Strong Password';
    }

});

/* =========================================================
   PASSWORD MATCH
========================================================= */

const confirmPassword =
document.getElementById('confirmPassword');

const matchMessage =
document.getElementById('matchMessage');

confirmPassword.addEventListener('input',()=>{

    if(confirmPassword.value === password.value
    && confirmPassword.value !== ''){

        matchMessage.style.display = 'block';

        matchMessage.innerHTML = '✓ Passwords Match';

        matchMessage.style.color = '#70e000';
    }

    else{

        matchMessage.style.display = 'block';

        matchMessage.innerHTML = '✗ Passwords Do Not Match';

        matchMessage.style.color = 'red';
    }

});

/* =========================================================
   LOADING BUTTON
========================================================= */

const signupBtn =
document.getElementById('signupBtn');

const spinner =
document.getElementById('spinner');

const btnText =
document.getElementById('btnText');

signupBtn.addEventListener('click',()=>{

    btnText.style.display = 'none';

    spinner.style.display = 'block';

    setTimeout(()=>{

        spinner.style.display = 'none';

        btnText.style.display = 'block';

        btnText.innerHTML = 'Account Created ✓';

    },2000);

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

         

        const signupCard =
document.querySelector('.signup-container');

rtlBtn.addEventListener('click',()=>{

    if(signupCard.dir === 'rtl'){

        signupCard.dir = 'ltr';

        rtlBtn.innerHTML = 'RTL';
    }

    else{

        signupCard.dir = 'rtl';

        rtlBtn.innerHTML = 'LTR';
    }

});
    }

})