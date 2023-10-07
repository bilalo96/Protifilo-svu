document.getElementById("contact-form").addEventListener("submit", function (event) {
    // Prevent the form from submitting by default
    event.preventDefault();

    // Reset previous error messages
    clearErrors();

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Validation
    var isValid = true;

    if (name.trim() === "") {
        displayError("name-error", "Name is required.");
        isValid = false;
    }

    if (email.trim() === "") {
        displayError("email-error", "Email is required.");
        isValid = false;
    } else if (!validateEmail(email)) {
        displayError("email-error", "Invalid email address.");
        isValid = false;
    }

    if (message.trim() === "") {
        displayError("message-error", "Message is required.");
        isValid = false;
    }

    if (isValid) {
        // Form is valid, you can submit it here
        alert("Form submitted successfully!");
        document.getElementById("contact-form").reset();
    }
});

function validateEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

function displayError(id, message) {
    var errorElement = document.getElementById(id);
    errorElement.textContent = message;
}

function clearErrors() {
    var errorElements = document.getElementsByClassName("error");
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = "";
    }
}