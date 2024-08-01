function validate() {
    let contact = document.getElementById("contact").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let designation = document.getElementById("designation").value;
    let files = document.getElementById("files").value;
    let dob = document.getElementById("dob").value;
    let formValid = false; //boolean

    //   console.log(contact, typeof contact);

    if (
        validateContact(contact, formValid) &&
        validateName(name, formValid) &&
        validateEmail(email, formValid) &&
        validateAge(age, formValid) &&
        validateDesignation(designation, formValid) &&
        validateFiles(files, formValid) &&
        validateDateOfBirth(dob, formValid)
    ) {
        document.getElementById("contact").value = "";
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("age").value = "";
        document.getElementById("designation").value = "";
        document.getElementById("files").value = "";
        document.getElementById("dob").value = "";
        setTimeout(function () {
            document.write("Form is submitted successfully");
        }, 2000);

    }
}

function validateContact(contact, formValid) {
    if (contact.trim() === "") {
        formValid = false;
        document.getElementById("contact-error").innerHTML = "This is required!";
    } else if (contact.trim().length != 10) {
        formValid = false;
        document.getElementById("contact-error").innerHTML = "Enter Valid contact!";
    } else {
        formValid = true;
        document.getElementById("contact-error").innerHTML = "";
    }

    return formValid;
}

function validateName(name, formValid) {
    if (name.trim() === "") {
        formValid = false;
        document.getElementById("name-error").innerHTML = "This is required!";
    } else if (name.trim().length <= 3) {
        formValid = false;
        document.getElementById("name-error").innerHTML = "Enter valid name!";
    } else {
        formValid = true;
        document.getElementById("name-error").innerHTML = "";
    }

    return formValid;
}

function validateAge(age, formValid) {
    if (age.trim() === "") {
        formValid = false;
        document.getElementById("age-error").innerHTML = "This is required!";
    } else if (age.trim().length > 3) {
        formValid = false;
        document.getElementById("age-error").innerHTML = "Enter valid age";
    } else {
        formValid = true;
        document.getElementById("age-error").innerHTML = "";
    }

    return formValid;
}

function validateEmail(email, formValid) {
    //regex
    let regexEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regexEmail.test(email)) {
        formValid = false;
        document.getElementById("email-error").innerHTML = "This is invalid email";
    } else {
        formValid = true;
        document.getElementById("email-error").innerHTML = "";
    }
    return formValid;
}

function validateDesignation(designation, formValid) {
    if (designation.trim() === "") {
        formValid = false;
        document.getElementById("desination-error").innerHTML = "This is required!";
    } else if (designation.trim().length <= 1) {
        formValid = false;
        document.getElementById("designation-error").innerHTML = "Enter valid designation!";
    } else {
        formValid = true;
        document.getElementById("designation-error").innerHTML = "";
    }

    return formValid;
}

function validateFiles(files, formValid) {
    if (files === '') {
        formValid = false;
        document.getElementById("files-error").innerHTML = "upload atleast one file";
    } else {
        formValid = true;
        document.getElementById("files-error").innerHTML = "";
    }

    return formValid;
}

function validateDateOfBirth(dob, formValid) {
    //regex
    let regexDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (!regexDate.test(dob)) {
        formValid = false;
        document.getElementById("dob-error").innerHTML = "This is invalid dob format";
    } else {
        formValid = true;
        document.getElementById("dob-error").innerHTML = "";
    }
    return formValid;
}
