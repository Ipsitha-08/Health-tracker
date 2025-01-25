document.addEventListener("DOMContentLoaded", function () {

    // ✅ Login Functionality
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Simulated User Login (Modify as needed)
            if (email === "atlurikarthik2@gmail.com" && password === "123456") {
                alert("Login Successful!");
                sessionStorage.setItem("isLoggedIn", "true");
                window.location.href = "inputs.html"; // Redirect to Inputs Page
            } else {
                alert("Invalid email or password. Try again.");
            }
        });
    }

    // ✅ Prevent Unauthorized Access to Inputs Page
    if (window.location.pathname.includes("inputs.html")) {
        const isLoggedIn = sessionStorage.getItem("isLoggedIn");
        if (!isLoggedIn) {
            alert("Please log in first.");
            window.location.href = "index.html"; // Redirect to Login Page
        }
    }

    // ✅ Multi-Step Form Navigation
    const steps = document.querySelectorAll(".step");
    let currentStep = 0;

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.classList.toggle("active", index === stepIndex);
        });
    }

    function nextStep() {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        } else {
            alert("Form Completed! Submitting...");
        }
    }

    function start() {
        alert("Your fitness journey has started!");
    }

    // ✅ Expose functions globally for button clicks in HTML
    window.nextStep = nextStep;
    window.start = start;

    // ✅ Show first step initially on Inputs Page
    if (steps.length > 0) {
        showStep(currentStep);
    }
});