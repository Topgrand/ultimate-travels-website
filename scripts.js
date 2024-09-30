// scripts.js

document.querySelector('form').addEventListener('submit', function(event) {
    var isValid = true;
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;

    if (name === '') {
        isValid = false;
        alert('Please enter your name.');
    }

    if (email === '' || !email.includes('@')) {
        isValid = false;
        alert('Please enter a valid email.');
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
