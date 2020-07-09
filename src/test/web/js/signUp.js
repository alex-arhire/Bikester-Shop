var firstName = document.getElementById('firstname');
var lastName = document.getElementById('lastname');
var email = document.getElementById('email');
var password = document.getElementById('password');
var confirmPass = document.getElementById('confirm-password');
var submitButton = document.getElementById('submit');
var inputDiv = document.getElementById('user-inputs');
var nameRegEx = /[a-zA-Z]+/g;
var emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10}/g;
var message = document.createElement('p');

function validateFirstName() {
    if (firstName.value.match(nameRegEx)) {
        message.innerHTML = '<span class="iconify" data-icon="ant-design:check-circle-outlined" data-inline="false" style="color: green;"></span>First Name validated';
        message.style.color = 'green';
        submitButton.removeAttribute('disabled');
    } else {
        message.innerHTML = '<span class="iconify" data-icon="clarity:remove-line" data-inline="false" style="color: red;"></span> Invalid First Name';
        message.style.color = 'red';
        submitButton.setAttribute('disabled', 'true');
    }
    inputDiv.appendChild(message);
}

firstName.addEventListener('keyup', validateFirstName);

function validateLastName() {
    if (lastName.value.match(nameRegEx)) {
        message.innerHTML = '<span class="iconify" data-icon="ant-design:check-circle-outlined" data-inline="false" style="color: green;"></span>Last Name validated';
        message.style.color = 'green';
        submitButton.removeAttribute('disabled');
    } else {
        message.innerHTML = '<span class="iconify" data-icon="clarity:remove-line" data-inline="false" style="color: red;"></span> Invalid Last Name';
        message.style.color = 'red';
        submitButton.setAttribute('disabled', 'true');
    }
    inputDiv.appendChild(message);
}

lastName.addEventListener('keyup', validateLastName);

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
    } else {
        message.innerHTML =
            "<span class=\"iconify\" data-icon=\"clarity:remove-line\" data-inline=\"false\" style=\"color: red;\"></span> Password should be at least 10 characters long, contain one uppercase, one lowercase and one digit";
        message.style.color = 'red';
        submitButton.setAttribute('disabled', 'true');
    }
    inputDiv.appendChild(message);
}

password.addEventListener('keyup', validatePassword);

function validatePasswordMatch() {
    if (password.value !== confirmPass.value) {
        message.innerText = "Passwords don't match";
        message.style.color = 'red';
        submitButton.setAttribute('disabled', 'true');
    } else {
        message.innerText = "";
        submitButton.removeAttribute('disabled');
        submitButton.style.backgroundColor = '#fc5500';
    }
    inputDiv.appendChild(message);
}

confirmPass.addEventListener("keyup", validatePasswordMatch);

