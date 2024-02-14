document.addEventListener('DOMContentLoaded', function(){
    const openPopUpLogin = document.getElementById('open_pop_up_login');
    const closePopUpLogin = document.getElementById('close_pop_up_login');
    const popUpLogin = document.getElementById('pop_up_login');

    const openPopUpRegister = document.getElementById('open_pop_up_register');
    const closePopUpRegister = document.getElementById('close_pop_up_register');
    const popUpRegister = document.getElementById('pop_up_register');

    const openPopUpPost = document.getElementById('open_pop_up_post');
    const closePopUpPost = document.getElementById('close_pop_up_post');
    const popUpPost = document.getElementById('pop_up_post');

    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('RegisterForm');
    const postForm = document.getElementById('PostForm');

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



    openPopUpPost.addEventListener('click', function(e){
        e.preventDefault();
        popUpPost.classList.add('active');
    });

    closePopUpPost.addEventListener('click', () => {
        popUpPost.classList.remove('active');
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
            localStorage.setItem('token', token);
            console.log('Bearer', token.access);
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
                throw new Error('not ok');
            }
            popUpRegister.classList.remove('active');
            alert('Регистрация прошла успешно.');
            return response.json();
        })
        .catch(error => {
            console.error(error);
            console.log(error.response);
        });        
    });


    postForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const token = localStorage.getItem('token');

        const title = document.getElementById('title').value;
        const desc = document.getElementById('register_password').value;
        const location = document.getElementById('first_name').value;
        const image = document.getElementById('last_name').value;


        fetch('http://127.0.0.1:8000/api/v1/posts/create_post/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ title, desc, location, image })
        })
        .then(response => {
            popUpPost.classList.remove('active');
            alert('Объявление создано.');
            return response.json();
        })
        .catch(error => {
            console.error(error);
            console.log(error.response);
        });        
    });

// ____________________________________________________________________________________________________________________________
});
