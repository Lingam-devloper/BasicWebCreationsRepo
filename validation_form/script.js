const form = document.querySelector(".form");
const UserName = document.getElementById("UserName");
const email = document.getElementById("Email");
const password = document.getElementById("Password");
const cpassword = document.getElementById("Confirm_Password"); 

form.addEventListener('submit', (event) => {
    if (!validateInputs()) {
        event.preventDefault();
    }
});

function validateInputs() {
    const UserNameval = UserName.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();
    let success = true;

    if (UserNameval === '') {
        success = false;
        showError(UserName, 'Username is required');
    } else {
        showSuccess(UserName);
    }

    if (emailval === '') {
        success = false;
        showError(email, 'Email is required');
    } else if (!validateEmail(emailval)) {
        success = false;
        showError(email, 'Please enter a valid email');
    } else {
        showSuccess(email);
    }

    if (passwordval === '') {
        success = false;
        showError(password, 'Password is Required');
    } else if (passwordval.length < 8) {
        success = false;
        showError(password, 'Password must be at least 8 characters');
    } else {
        showSuccess(password);
    }

    if (cpasswordval === '') {
        success = false;
        showError(cpassword, 'Confirm password is required');
    } else if (cpasswordval !== passwordval) {
        success = false;
        showError(cpassword, 'Password does not match');
    } else {
        showSuccess(cpassword);
    }

    return success;
}

function showError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");
    errorElement.innerText = message;
    inputGroup.classList.add("error");
    inputGroup.classList.remove("success");
}

function showSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");
    errorElement.innerText = "";
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

function validateEmail(email) {
    return String(email).toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
