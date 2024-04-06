document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the entered password
    var password = document.getElementById("password").value;

    // Check the password and redirect accordingly
    switch (password) {
        case "password1":
            window.location.href = "https://www.youtube.com";
            break;
        case "password2":
            window.location.href = "https://www.google.com";
            break;
        case "password3":
            window.location.href = "https://www.gemini.com";
            break;
        default:
            document.getElementById("result").innerText = "Invalid password!";
            break;
    }
});
