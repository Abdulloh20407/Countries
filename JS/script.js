document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const loginForm = document.querySelector('.form-box.login form');
    const errorMessage = document.querySelector('.form-box.login .error-message');

    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });

    btnPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Simulate successful login
        if (errorMessage) {
            errorMessage.textContent = ''; // Clear any previous error message if it exists
        }

        console.log('Redirecting...');

        setTimeout(() => {
            // Redirect to the specified URL
            window.location.href = 'https://countries-sage-one.vercel.app/';
        }, 1000); // Redirect after 1 second (simulated server response time)
    });
});
