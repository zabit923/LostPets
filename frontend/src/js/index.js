document.addEventListener('DOMContentLoaded', function(){
    const openPopUpLogin = document.getElementById('open_pop_up_login');
    const closePopUpLogin = document.getElementById('close_pop_up_login');
    const popUpLogin = document.getElementById('pop_up_login');

    const loginForm = document.getElementById('loginForm');


    openPopUpLogin.addEventListener('click', function(e){
        e.preventDefault();
        popUpLogin.classList.add('active');
    });

    closePopUpLogin.addEventListener('click', () => {
        popUpLogin.classList.remove('active');
    });


    
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
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const token = data;
            console.log('Bearer token:', token);
        })
        .catch(error => {
            console.error('There was a problem with the request:', error);
            console.log('Response from server:', error.response);
        });        
    });
});
