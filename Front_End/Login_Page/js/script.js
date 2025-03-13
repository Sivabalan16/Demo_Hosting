/* script.js */

// Toggle Password Visibility
function togglePassword() {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

// Theme Toggle Function
function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    // Change button text or icon if needed
    let themeButton = document.getElementById("theme-toggle");
    if (document.body.classList.contains("dark-mode")) {
        themeButton.innerText = "Light Mode";
    } else {
        themeButton.innerText = "Dark Mode";
    }
}

