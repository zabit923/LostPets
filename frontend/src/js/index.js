document.addEventListener('DOMContentLoaded', function(){
    const openPopUpLogin = document.getElementById('open_pop_up_login');
    const closePopUpLogin = document.getElementById('close_pop_up_login');
    const popUpLogin = document.getElementById('pop_up_login');

    const openPopUpRegister = document.getElementById('open_pop_up_register');
    const closePopUpRegister = document.getElementById('close_pop_up_register');
    const popUpRegister = document.getElementById('pop_up_register');

    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('RegisterForm');

// ____________________________________________________________________________________________________________________________

    openPopUpLogin.addEventListener('click', function(e){
        e.preventDefault();
        popUpLogin.classList.add('active');
    });

    closePopUpLogin.addEventListener('click', () => {
        popUpLogin.classList.remove('active');
    });



    openPopUpRegister.addEventListener('click', function(e){
        e.preventDefault();
        popUpRegister.classList.add('active');
    });

    closePopUpRegister.addEventListener('click', () => {
        popUpRegister.classList.remove('active');
    });

// ____________________________________________________________________________________________________________________________

    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('ok');
            }
            popUpLogin.classList.remove('active');
            return response.json();
        })
        .then(data => {
            const token = data;
            console.log('Bearer token:', token);
        })
        .catch(error => {
            console.error(error);
            console.log(error.response);
        });        
    });


    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('register_username').value;
        const password = document.getElementById('register_password').value;
        const first_name = document.getElementById('first_name').value;
        const last_name = document.getElementById('last_name').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;

        fetch('http://127.0.0.1:8000/api/v1/users/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password, first_name, last_name, email, age })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('ok');
            }
            popUpRegister.classList.remove('active');
            alert('Регистрация прошла успешно');
            return response.json();
        })
        .catch(error => {
            console.error(error);
            console.log(error.response);
        });        
    });

// ____________________________________________________________________________________________________________________________

});
