document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    //Error display element
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    // Clear previous errors
    usernameError.textContent = "";
    passwordError.textContent = ""; 

    //validation flags
    let valid = true;

    // Validate username
    if (username.trim() === "") {
        usernameError.textContent = "Username is required.";
        valid = false;
    }else if (username.length < 3) {
        usernameError.textContent = "Username must be at least 3 characters.";
        valid = false;
    }else if (username.length > 15) {
        usernameError.textContent = "Username must be less than 15 characters.";
        valid = false;
    }else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        usernameError.textContent = "Username can only contain letters, numbers, and underscores.";
        valid = false;
    }

    // Validate password
    if (password.trim() === "") {
        passwordError.textContent = "Password is required.";
        valid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        valid = false;
    } else if (password.length > 20) {
        passwordError.textContent = "Password must be less than 20 characters.";
        valid = false;
    }else if (!/[A-Z]/.test(password)) {
        passwordError.textContent = "Password must contain at least one uppercase letter.";
        valid = false;
    } else if (!/[a-z]/.test(password)) {
        passwordError.textContent = "Password must contain at least one lowercase letter.";
        valid = false;
    } else if (!/[0-9]/.test(password)) {
        passwordError.textContent = "Password must contain at least one number.";
        valid = false;
    }else if (/\s/.test(password)) {
        passwordError.textContent = "Password cannot contain spaces.";
        valid = false;
    }

    // final check
    if (valid) {
        alert("Login successful!");
        // Here you can add code to submit the form data to the server
        // e.g., using fetch() or XMLHttpRequest
    }
});