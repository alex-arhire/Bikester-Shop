var firstName = document.getElementById('firstname');
var lastName = document.getElementById('lastname');
var email = document.getElementById('email');
var password = document.getElementById('password');
var confirmPass = document.getElementById('confirm-password');
var submitButton = document.getElementById('submit');
var inputDiv = document.getElementById('user-inputs');
var form = document.getElementById('login-form');
var nameRegEx = /[a-zA-Z]+/g;
var emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10}/g;
var message = document.createElement('p');

window.onload = function() {
    form.reset();
};

function validate(info, msgColor, btnDisabled) {
    message.innerHTML = info;
    message.style.color = msgColor;
    inputDiv.appendChild(message);
    if (btnDisabled === true) {
        submitButton.setAttribute('disabled', 'true');
    } else if (btnDisabled === null){
        submitButton.removeAttribute('disabled');
    }
}

function validateFirstName() {
    if (firstName.value.match(nameRegEx)) {
        validate('<span class="iconify" data-icon="ant-design:check-circle-outlined" data-inline="false" style="color: green;"></span> First Name validated', 'green', null);
    } else {
        validate('<span class="iconify" data-icon="clarity:remove-line" data-inline="false" style="color: red;"></span> Invalid First Name', 'red', true);
    }
}

firstName.addEventListener('keyup', validateFirstName);

function validateLastName() {
    if (lastName.value.match(nameRegEx)) {
        validate('<span class="iconify" data-icon="ant-design:check-circle-outlined" data-inline="false" style="color: green;"></span> Last Name validated', 'green', null);
    } else {
        validate('<span class="iconify" data-icon="clarity:remove-line" data-inline="false" style="color: red;"></span> Invalid Last Name', 'red', true);
    }
}

lastName.addEventListener('keyup', validateLastName);

function validateEmail() {
    if (email.value.match(emailRegEx)) {
        validate('<span class="iconify" data-icon="ant-design:check-circle-outlined" data-inline="false" style="color: green;"></span> Email validated', 'green', null);
    } else {
        validate('<span class="iconify" data-icon="clarity:remove-line" data-inline="false" style="color: red;"></span> Invalid email address', 'red', true);
    }
}

email.addEventListener('keyup', validateEmail);

function validatePassword() {
    if (password.value.match(passwordRegEx)) {
        validate(`<span class="iconify" data-icon="ant-design:check-circle-outlined" data-inline="false" style="color: green;"></span> Password validated`, 'green', null);
    } else {
        validate( `<span class=\"iconify\" data-icon=\"clarity:remove-line\" data-inline=\"false\" style=\"color: red;\"></span> Password should be at least 10 characters long, contain one uppercase, one lowercase and one digit`, 'red', true);
    }
}

password.addEventListener('keyup', validatePassword);

function validatePasswordMatch() {
    if (password.value !== confirmPass.value) {
        validate( `<span class=\"iconify\" data-icon=\"clarity:remove-line\" data-inline=\"false\" style=\"color: red;\"></span> Passwords don't match`, 'red', true);
    } else {
        validate('', null, null);
        submitButton.style.backgroundColor = '#fc5500';
    }
}

confirmPass.addEventListener("keyup", validatePasswordMatch);

