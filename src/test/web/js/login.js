var email = document.getElementById('email');
var password = document.getElementById('password');
var inputDiv = document.getElementById('user-inputs');
var submitButton = document.getElementById('submit');
var form = document.getElementById('login-form');
var emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10}/g;
var message = document.createElement('p');

window.onload = function() {
    document.querySelectorAll('login-form input').value = '';
};

function validateEmail() {
    if (email.value.match(emailRegEx)) {
        message.innerHTML = '<span class="iconify" data-icon="ant-design:check-circle-outlined" data-inline="false" style="color: green;"></span> Email validated';
        message.style.color = 'green';
        submitButton.removeAttribute('disabled');
    } else {
        message.innerHTML = '<span class="iconify" data-icon="clarity:remove-line" data-inline="false" style="color: red;"></span> Invalid email address';
        message.style.color = 'red';
        submitButton.setAttribute('disabled', 'true');
    }
    inputDiv.appendChild(message);
}

email.addEventListener('keyup', validateEmail);

function validatePassword() {
    if (password.value.match(passwordRegEx)) {
        message.innerHTML = '<span class="iconify" data-icon="ant-design:check-circle-outlined" data-inline="false" style="color: green;"></span> Password validated';
        message.style.color = 'green';
        submitButton.removeAttribute('disabled');
        submitButton.style.backgroundColor = '#fc5500';
    } else {
        message.innerHTML =
            "<span class=\"iconify\" data-icon=\"clarity:remove-line\" data-inline=\"false\" style=\"color: red;\"></span> Password should be at least 10 characters long, contain one uppercase, one lowercase and one digit";
        message.style.color = 'red';
        submitButton.setAttribute('disabled', 'true');
    }
    inputDiv.appendChild(message);
}

password.addEventListener('keyup', validatePassword);